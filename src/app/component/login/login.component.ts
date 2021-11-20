import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  Email: any
  Password: any

  constructor(private fb: FormBuilder, private router: Router) {}

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
    // if (this.login.invalid) {
    //   return;
    // }
   this.Email = localStorage.getItem("email");
   this.Password = localStorage.getItem("password");
   console.log(this.Email, " ", this.Password);
   console.log(JSON.stringify(this.login.value.email));
   console.log(JSON.stringify(this.login.value.password));

   if(this.Email === JSON.stringify(this.login.value.email) && this.Password === JSON.stringify(this.login.value.password))
   {
         console.log("Welcome")
         this.router.navigate(['dashboard']);

   }
   else{
     console.log("Invalid Username or Password")

   }

  }

  goToSignUp() {
    this.router.navigate(['register']);
  }
}
