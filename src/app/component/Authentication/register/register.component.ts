import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../shared/Firebase/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,public firebaseService : FirebaseService) {}

  ngOnInit(): void {
  }

  async onSubmit(data: any) {
     await this.firebaseService.signup(data.value.email,data.value.password)
      console.log(data.value);

  }

  goToSignIn() {

    this.router.navigate(['login']);
  }
}
