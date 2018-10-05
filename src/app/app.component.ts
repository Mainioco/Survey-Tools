import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import * as Survey from "survey-angular";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  model$: Observable<Survey.Model>;

  constructor(private _http: HttpClient) {}
  ngOnInit() {
    this.model$ = this._http.get("assets/mock/survey-1.json").pipe(
      map(x => {
        return new Survey.Model(x);
      })
    );
  }
}
