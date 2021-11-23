import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import  { RestApiService } from '../../shared/rest-api.service';
import { LoadingService } from '../../shared/Loading/loading.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  loading$ = this.loader.loading$;

   @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService,
    public router: Router,
    private loader:LoadingService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employee-list'])
    })
  }

}
