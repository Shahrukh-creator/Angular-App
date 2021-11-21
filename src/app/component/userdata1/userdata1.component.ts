import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../Service/post-data.service';

@Component({
  selector: 'app-userdata1',
  templateUrl: './userdata1.component.html',
  styleUrls: ['./userdata1.component.css']
})
export class Userdata1Component implements OnInit {

  Employee: any = [];
  constructor(private post: PostDataService) {
    this.post.getPostData().subscribe(data =>{
       this.Employee = data;
      console.log(data);
    }) }

  ngOnInit(): void {
  }

}
