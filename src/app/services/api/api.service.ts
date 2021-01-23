import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Payload } from '../../models/payload.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlServer = environment.server;
  token: string


  constructor(private http: HttpClient) {

    this.token = localStorage.getItem('token')
  }

  onSearch(payload: Payload): Observable<Payload> {
    var headers = new HttpHeaders().set('Authorization', this.token);
    const purchases = this.urlServer + "/pockets/reports/transactions/purchases?apiKey=252156";
    return this.http.post<Payload>(purchases, payload, { headers });

  }

}









