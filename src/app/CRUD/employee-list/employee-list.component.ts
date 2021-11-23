import { Component, OnInit } from '@angular/core';
import  { RestApiService } from '../../shared/rest-api.service';
import { LoadingService } from '../../shared/Loading/loading.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  loading$ = this.loader.loading$;

   Employee: any = [];

  constructor(public restApi: RestApiService,
    private loader:LoadingService) {
     this.loadEmployees()
   }

  ngOnInit(): void {
  }


  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }


}
