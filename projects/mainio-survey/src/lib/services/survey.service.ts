import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Observable, of, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface IPostSurvey {
  id: any;
  user_id: number;
  data: any;
}

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  public onSendSurvey: Subject<IPostSurvey> = new Subject<IPostSurvey>();

  constructor(private http: HttpClient) {}

  getSurvey(api: string, id: any): Observable<any> {
    return this.http.get<string[]>(`${api}/${id}`); // REMOVE .JSON IF NECESSARY
  }

  sendSurveyToServer(survey, user_id = 0) {
    // POST TO SERVER HERE
    // ...
    let item: IPostSurvey = {
      id: uuid(),
      user_id: user_id,
      data: survey.data
    };
    this.onSendSurvey.next(item);
  }
}
