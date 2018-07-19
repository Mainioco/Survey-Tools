import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainioSurveyModule } from '../../dist/mainio-survey';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainioSurveyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
