import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';



import { Credentials } from '../../models/credentials.interface';
import { Payload } from '../../models/payload.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlServer = environment.server;

  constructor(private http: HttpClient) { }

  onLogin(payload: Payload): Observable<Payload> {
    //var headers = new HttpHeaders().set('Authorization', token); 
    const login = this.urlServer + "/login?apiKey=252156";
    return this.http.post<Payload>(login, payload,);

  }



}
