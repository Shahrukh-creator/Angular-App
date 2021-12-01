import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../../shared/RestApiService/rest-api.service';
import { LoadingService } from '../../../shared/Loading/loading.service';

@Component({
  selector: 'app-userdata1',
  templateUrl: './userdata1.component.html',
  styleUrls: ['./userdata1.component.css'],
})
export class Userdata1Component implements OnInit {

  loading$ = this.loader.loading$;

  Employee: any = [];
  constructor(private router: Router,private post: RestApiService, private loader:LoadingService) {
    this.post.getPostData().subscribe((data) => {
      this.Employee = data;
      console.log(data);
    });

  }


  ngOnInit(): void {}

  routerToLink(id: any)
  {
    this.router.navigate(['/userdata2',id]);
  }


}
