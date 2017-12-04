import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {

  constructor(
    private http: Http) { }

  getDados(): Observable<any> {
    return this.http.get('http://localhost:8080/usuario/', {
      headers: {'Authorization': localStorage.getItem('token')}
    })
      .map((response: Response) => response.json())
      .catch((e: any) => Observable.throw(this.handleError(e)));
  }

  private handleError(error: any) {
    location.replace('/login');
  }
}
