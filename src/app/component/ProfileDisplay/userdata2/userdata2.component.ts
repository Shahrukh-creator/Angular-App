import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { RestApiService } from '../../../shared/RestApiService/rest-api.service';
import { LoadingService } from '../../../shared/Loading/loading.service';

@Component({
  selector: 'app-userdata2',
  templateUrl: './userdata2.component.html',
  styleUrls: ['./userdata2.component.css']
})
export class Userdata2Component implements OnInit {

  loading$ = this.loader.loading$;

  id = this.actRoute.snapshot.params['id'];
  Employee: any = [];

  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private loader:LoadingService) { }

  ngOnInit(): void {
    this.restApi.getSinglePostData(this.id).subscribe((data: {}) => {
      this.Employee.push(data) ;
    })
  }


}
