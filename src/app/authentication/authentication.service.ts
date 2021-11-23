import { Injectable } from '@angular/core';
import { SignInData } from '../model/signIndata';
import { Router } from '@angular/router';
import { InterceptorService } from '../shared/interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //   Email= localStorage.getItem("email");
  //  Password= localStorage.getItem("password");
  // let url = "localhost:3001/token/sign";

   private readonly mokedUser = new SignInData('shahrukh@gmail.com','shahrukh@1234')

  isAuthenticated = false;
  token: string = ""

  constructor(private router: Router, private inter: InterceptorService) { }

  authenticate(signIndata: SignInData): boolean
  {
    if(this.checkCredentials(signIndata))
    {
      this.isAuthenticated = true;
      console.log("Logged In");

      this.inter.signIn().subscribe((data) =>{
        this.token =  data.headers.Authorization;
        console.log(this.token);

      })
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
