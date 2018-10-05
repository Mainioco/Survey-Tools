import { Component, Input, AfterViewInit, OnInit } from "@angular/core";
import * as Survey from "survey-angular";
import { SurveyService } from "../../services/survey.service";

@Component({
  selector: "mainio-survey",
  templateUrl: "./mainio-survey.component.html",
  styleUrls: ["./mainio-survey.component.css"]
})
export class MainioSurveyComponent implements OnInit {
  @Input()
  api: string;
  @Input()
  survey_id: any;
  @Input()
  user_id: string;
  @Input()
  loadedModel: Survey.Model;
  gotSurveyData = false;

  constructor(
    private surveyService: SurveyService,
    private mainioSurveyData: MainioSurveyData
  ) {}

  ngOnInit(): void {
    console.log(
      "Component loaded with values ",
      this.api,
      this.survey_id,
      this.user_id
    );
    if (this.api && this.survey_id && this.user_id) {
      this.gotSurveyData = true;
      this.getSurvey(this.api, this.survey_id, this.user_id);
    } else if (
      this.mainioSurveyData &&
      this.mainioSurveyData.api &&
      this.mainioSurveyData.survey_id &&
      this.mainioSurveyData.user_id
    ) {
      this.gotSurveyData = true;
      const { api, survey_id, user_id } = this.mainioSurveyData;
      if (!this.loadedModel) this.getSurvey(api, survey_id, user_id);
      else Survey.SurveyNG.render("surveyElement", { model: this.loadedModel });
    } else {
      this.gotSurveyData = false;
    }
  }

  getSurvey(api, survey_id, user_id) {
    this.surveyService.getSurvey(api, survey_id).subscribe(survey_json => {
      const surveyModel = new Survey.Model(survey_json[0]);
      surveyModel.onComplete.add(result => {
        this.surveyService.sendSurveyToServer(result, user_id);
      });
      Survey.SurveyNG.render("surveyElement", { model: surveyModel });
    });
  }
}

export class MainioSurveyData {
  public api: string;
  public survey_id: string;
  public user_id: string;
}
