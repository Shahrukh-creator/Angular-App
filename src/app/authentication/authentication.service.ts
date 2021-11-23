import { Injectable } from '@angular/core';
import { SignInData } from '../model/signIndata';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //   Email= localStorage.getItem("email");
  //  Password= localStorage.getItem("password");

   private readonly mokedUser = new SignInData('shahrukh@gmail.com','shahrukh@1234')

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signIndata: SignInData): boolean
  {
    if(this.checkCredentials(signIndata))
    {
      this.isAuthenticated = true;
      console.log("Logged In");
      this.router.navigate(['dashboard']);

      return true;
    }
    console.log("Incorrect Credentials");

    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signIndata: SignInData): boolean{
    return this.checkEmail(signIndata.getEmail()) && this.checkPassword(signIndata.getPassword())
  }

  private checkEmail(email: string): boolean{
    return email === this.mokedUser.getEmail();

  }

   private checkPassword(password: string): boolean{
     return password === this.mokedUser.getPassword();

  }

  logOut()
  {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
