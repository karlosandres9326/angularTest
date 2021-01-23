import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginService } from '../../services/login/login.service';
import { CredentialsInterface } from '../../models/credentials.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contraseña: new FormControl('',Validators.required)
  });

  constructor(private apiService: ApiService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(message: CredentialsInterface){
    this.loginService.onLogin(message).subscribe(data => {
      console.log(data);
    }) 
  }

}
