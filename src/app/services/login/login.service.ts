import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';



import { CredentialsInterface } from '../../models/credentials.interface';
import { PayloadInterface } from '../../models/payload.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private urlServer = environment.server;

constructor(private http: HttpClient) { }

onLogin(message: CredentialsInterface): Observable<PayloadInterface> {
 
const login =  this.urlServer + "/login";
  return this.http.post<PayloadInterface>(login, message);

}



}
