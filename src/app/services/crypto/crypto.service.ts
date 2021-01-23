import { Injectable } from '@angular/core';
import { enc, AES, mode, pad, MD5 } from 'crypto-js';
import { environment } from '../../../environments/environment';

import { Credentials } from '../../models/credentials.interface';
import { Payload } from '../../models/payload.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private urlServer = environment.server;

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  };

  constructor() { }

  encrypt(message: string): string {
    const toEncryptedArray = enc.Utf8.parse(message);
    const payload = AES.encrypt(
      toEncryptedArray,
      this.getKey(),
      CryptoService.CONFIG
    );

    return payload.ciphertext.toString(enc.Base64);
  }

  decrypt(message: string): string {
    const toEncryptArray = enc.Base64.parse(message);
    const payload = AES.decrypt(
      { ciphertext: toEncryptArray },
      this.getKey(),
      CryptoService.CONFIG
    );

    return payload.toString(enc.Utf8);
  }

  private getKey() {
    return enc.Hex.parse(MD5(environment.key).toString());
  }
}
