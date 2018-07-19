import { Component, Input, AfterViewInit } from '@angular/core';
import * as Survey from 'survey-angular';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'mainio-survey',
  templateUrl: './mainio-survey.component.html',
  styleUrls: ['./mainio-survey.component.css']
})
export class MainioSurveyComponent implements AfterViewInit {
  @Input() api: string;
  @Input() survey_id: any;
  @Input() user_id: string;

  constructor(
    private surveyService: SurveyService,
    private mainioSurveyData: MainioSurveyData
  ) {}

  ngAfterViewInit(): void {
    let api, survey_id, user_id;

    if (this.api && this.survey_id && this.user_id) {
      console.log('Got survey data from component inputs.');
      api = this.api;
      survey_id = this.survey_id;
      user_id = this.user_id;
      this.getSurvey(api, survey_id, user_id);
    } else if (this.mainioSurveyData) {
      console.log('Got survey data from window.MainioSurveyData.');
      api = this.mainioSurveyData.api;
      survey_id = this.mainioSurveyData.survey_id;
      user_id = this.mainioSurveyData.user_id;
      this.getSurvey(api, survey_id, user_id);
    } else {
      console.error('Survey data was incomplete.');
    }
  }

  getSurvey(api, survey_id, user_id) {
    this.surveyService.getSurvey(api, survey_id).subscribe(survey_json => {
      const surveyModel = new Survey.Model(survey_json[0]);
      surveyModel.onComplete.add(result => {
        this.surveyService.sendSurveyToServer(result, user_id);
      });
      Survey.SurveyNG.render('surveyElement', { model: surveyModel });
    });
  }
}

export class MainioSurveyData {
  public api: string;
  public survey_id: string;
  public user_id: string;
}
