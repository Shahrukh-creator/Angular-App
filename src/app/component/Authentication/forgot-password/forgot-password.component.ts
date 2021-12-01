import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../shared/Firebase/firebase.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public firebaseAuth:FirebaseService) { }

  ngOnInit(): void {
  }

}
