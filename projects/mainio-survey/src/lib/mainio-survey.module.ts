import "../polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";
import {
  MainioSurveyComponent,
  MainioSurveyData
} from "./components/mainio-survey/mainio-survey.component";
import { SurveyService } from "./services/survey.service";

@NgModule({
  declarations: [MainioSurveyComponent],
  imports: [BrowserModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MainioSurveyData,
    SurveyService,
    { provide: MainioSurveyData, useValue: window["MainioSurveyData"] }
  ],
  entryComponents: [MainioSurveyComponent],
  exports: [MainioSurveyComponent]
})
export class MainioSurveyModule {
  constructor(injector: Injector) {
    const customElement = createCustomElement(MainioSurveyComponent, {
      injector: injector
    });
    // Register it in the elements registry of the browser => This is NOT an Angular API!
    customElements.define("mainio-survey", customElement);
  }
  ngDoBootstrap() {}
}
