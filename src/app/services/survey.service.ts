import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getSurvey(id: number): Observable<any> {
    return this.http.get<string[]>(`./assets/mock/survey-${id}.json`);
  }

  sendSurveyToServer(survey, user_id) {
    console.log({ id: uuid(), user_id: user_id, ...survey.data });
  }
}
