import { Injectable } from '@angular/core';
import { enc, AES, mode, pad, MD5 } from 'crypto-js';
import { environment } from '../../../environments/environment';



import { CredentialsInterface } from '../../models/credentials.interface';
import { PayloadInterface } from '../../models/payload.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlServer = environment.server;

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

  constructor(private http: HttpClient) { }


  
}









