import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getSurvey(api: string, id: any): Observable<any> {
    return this.http.get<string[]>(`${api}/${id}.json`);
  }

  sendSurveyToServer(survey, user_id) {
    console.log({ id: uuid(), user_id: user_id, ...survey.data });
  }
}
