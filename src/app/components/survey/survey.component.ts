import { Component, Input, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() json: any;

  constructor(private surveyService: SurveyService) {}


  ngOnInit() {
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onComplete.add(this.surveyService.sendSurveyToServer);
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}
