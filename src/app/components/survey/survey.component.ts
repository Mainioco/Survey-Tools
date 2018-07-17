import { Component, Input, OnInit, Injector } from '@angular/core';
import * as Survey from 'survey-angular';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'mainio-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() survey_id: any;
  @Input() user_id: string;

  constructor(private surveyService: SurveyService) {

  }

  ngOnInit() {
    this.surveyService.getSurvey(this.survey_id).subscribe(survey_json => {
      const surveyModel = new Survey.Model(survey_json[0]);
      surveyModel.onComplete.add(result => {
        this.surveyService.sendSurveyToServer(result, this.user_id);
      });
      Survey.SurveyNG.render('surveyElement', { model: surveyModel });
    });
  }
}
