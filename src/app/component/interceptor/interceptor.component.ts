import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../../shared/InterceptorService/interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css'],
})
export class InterceptorComponent implements OnInit {
  text: string = '';

  constructor(private router: Router, private inter: InterceptorService) {}

  ngOnInit(): void {}

  FetchAccess() {
    this.inter
      .getPath()
      .subscribe((data) => {
        this.text = data.msg;
        console.log( this.text);
      },
      (error) =>{
        this.text = error.statusText;
        console.log("Incoming: ",this.text);
      }
      )

  }
}
