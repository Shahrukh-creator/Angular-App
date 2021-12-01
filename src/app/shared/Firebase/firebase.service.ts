import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
// import { firebase } from 'firebase/app';
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


   isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth,private router: Router,
   public ngZone: NgZone) {
   }

   async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      console.log("Welcome");
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch((error) =>
    {
      console.log("Invalid Username Or Password");

    })

  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      // this.isLoggedIn = true
        alert("Register SuccessFully");
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  // Sign in with Google

  async GoogleAuth(): Promise<boolean> {
    // return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return this.firebaseAuth.signInWithPopup(googleAuthProvider)
    .then((result) => {
      console.log(result);
      //  this.ngZone.run(() => {
      //     this.router.navigate(['dashboard']);
      //   })
      return true;
    }).catch((error) => {
      // window.alert(error)
      return false;
    })
  }


   // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }



  logout(){
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }
}
