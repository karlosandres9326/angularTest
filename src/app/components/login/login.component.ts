import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Credentials } from '../../models/credentials.interface';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { Payload } from 'src/app/models/payload.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string
  loginForm = new FormGroup({
    user_mail: new FormControl('', Validators.required),
    user_password: new FormControl('', Validators.required)
  });
  credentials: Payload = new Payload();
  get user_mail() { return this.loginForm.get('user_mail'); }
  get user_password() { return this.loginForm.get('user_password'); }

  constructor(private route: Router, private CryptoS: CryptoService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(credentials: Credentials) {
    this.credentials.payload = this.CryptoS.encrypt(JSON.stringify(credentials))

    this.loginService.onLogin(this.credentials).subscribe(data => {
      localStorage.setItem('token', JSON.stringify(data))
      this.route.navigate(['/consultas'])

      console.log(data);
    }, (error) => {
      this.errorMessage = error.message
      console.log(error)
    })
  }

}
