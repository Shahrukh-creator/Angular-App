import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import  { SignInData } from '../../model/signIndata';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  Email: any
  Password: any
  invalidStatus: boolean;
  credInvalid = false;

  constructor(public auth: AuthenticationService , private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  get f() {
    return this.login.controls;
  }

  loginSubmit() {

  if(this.login.invalid)
  {
    this.credInvalid = true;
  }
  this.checkCredentials();

  }

  private async checkCredentials()
  {
     const signIndata = new SignInData(this.login.value.email, this.login.value.password);
     this.invalidStatus = await this.auth.authenticate(signIndata);
     console.log('sada', this.invalidStatus)


   if(!this.invalidStatus)
   {
      console.log('heloo',this.invalidStatus);

     this.credInvalid = true;
   }
  }

  goToSignUp() {
    this.router.navigate(['register']);
  }
}
