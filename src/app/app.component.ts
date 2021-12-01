import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';

  constructor(public auth: AuthenticationService){}

  logOut()
  {
    this.auth.logOut();
  }
}
