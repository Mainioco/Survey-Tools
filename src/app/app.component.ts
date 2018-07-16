import { Component, OnInit } from '@angular/core';
import { SurveyService } from './services/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  json: any;

  constructor(private surveyService: SurveyService){}

  ngOnInit(){
    this.json = this.surveyService.getSurvey(0);
    
  }
 
}
