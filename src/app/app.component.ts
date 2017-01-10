import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Welcome';
  private http: Http;
  constructor(_http: Http) {
    this.http = _http;
    this.http
      .get(`${environment.host}/users`)
      .map((res: Response) => res.json())
      .subscribe(
        (response) => console.log(response),
        (err) => console.warn(err)
      );
  }
}
