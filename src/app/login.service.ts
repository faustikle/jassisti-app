import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(
    private http: Http) { }

  getUrl(): Observable<String> {
    return this.http.get('http://localhost:8080/login/url')
      .map((response: Response) => response.json().url);
  }

  login(code: String): Observable<any> {
    return this.http.post('http://localhost:8080/login/' + code, [])
      .map((response: Response) => response.json());
  }
}
