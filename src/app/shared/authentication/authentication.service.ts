import { Injectable, NgZone } from '@angular/core';
import { SignInData } from '../../Utilities/model/signIndata';
import { Router } from '@angular/router';
import { InterceptorService } from '../InterceptorService/interceptor.service';
import { FirebaseService } from '../Firebase/firebase.service';
import { Interface } from '../../Utilities/Interface/interface';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  isAuthenticated = false;
  token: Interface;
  public ngZone: NgZone;

  constructor(
    private router: Router,
    private inter: InterceptorService,
    public firebaseService: FirebaseService
  ) {}

  async displayGoogleLogin(){

    const res = await this.firebaseService.GoogleAuth();
    console.log("status",res);


    if(res)
    {
       this.isAuthenticated = true;
       this.router.navigate(['dashboard']);
        //  this.ngZone.run(() => {

        // })
    }else{
      this.isAuthenticated = false;
      alert("Invalid Authorization")
    }
  }

  async authenticate(signIndata: SignInData): Promise<boolean> {

    // console.log(this.checkCredentials(signIndata));
    const x = await this.checkCredentials(signIndata);
    if (x) {

      console.log("123");

      this.inter.signIn().subscribe((data) => {
        this.token = data.headers.Authorization;
        console.log(this.token);
      });
      this.router.navigate(['dashboard']);

      return true;
    }

    console.log('Incorrect Credentials');

    this.isAuthenticated = false;
    return false;
  }

  private async checkCredentials(signIndata: SignInData): Promise<boolean> {
     return await this.firebaseService.signin(
      signIndata.getEmail(),
      signIndata.getPassword()
    ).then(res => {
      if (this.firebaseService.isLoggedIn) {
      this.isAuthenticated = true;
      console.log('Logged In');
      return true;
      }
      else{
        return false;
      }
    })


  }

  logOut() {
    this.firebaseService.logout();
    if (!this.firebaseService.isLoggedIn){
      this.isAuthenticated = false;
      console.log("Logged Out");

      this.router.navigate(['']);
    }
    else{
      alert("User Not Logged In!");
    }

  }
}
