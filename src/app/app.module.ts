import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';


import { SurveyComponent } from './components/survey/survey.component';

@NgModule({
  declarations: [SurveyComponent],
  imports: [BrowserModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  entryComponents: [SurveyComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const customElement = createCustomElement(SurveyComponent, {
      injector: injector
    });
    // Register it in the elements registry of the browser => This is NOT an Angular API!
    customElements.define('mainio-survey', customElement);
  }
  ngDoBootstrap() { }
}
