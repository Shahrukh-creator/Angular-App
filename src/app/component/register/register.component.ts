import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  myid: any
  Myid: any

  constructor(private router: Router) {}

  ngOnInit(): void {
    // localStorage.clear();
  }

  onSubmit(data: any) {
    localStorage.setItem("name",JSON.stringify(data.value.name));
    localStorage.setItem("email",JSON.stringify(data.value.email));
    localStorage.setItem("password",JSON.stringify(data.value.password));

    console.log(data.value);

  }
  goToSignIn() {

    this.router.navigate(['login']);
  }
}
