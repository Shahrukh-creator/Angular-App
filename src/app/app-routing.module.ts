import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeCreateComponent } from './CRUD/employee-create/employee-create.component';
import { EmployeeEditComponent } from './CRUD/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './CRUD/employee-list/employee-list.component';
import { Userdata1Component } from './component/userdata1/userdata1.component';
import { Userdata2Component } from './component/userdata2/userdata2.component';
import { AuthGuard } from './guards/auth.guard';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { InterceptorComponent } from './component/interceptor/interceptor.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: 'login',
    pathMatch: "full"
  },

  {
  path:'login',
  component: LoginComponent,
  // canActivate: [AuthGuard]
  },

  {
   path:'register',
  component:RegisterComponent,
  // canActivate: [AuthGuard]
  },

  {
   path:'dashboard',
  component:DashboardComponent,
  canActivate: [AuthGuard]
  },

  {
   path:'userdata1',
  component:Userdata1Component,
  canActivate: [AuthGuard]
  },

  {
   path:'userdata2/:id',
  component:Userdata2Component,
  canActivate: [AuthGuard]
  },

  {
   path:'employee-Create',
  component:EmployeeCreateComponent,
  canActivate: [AuthGuard]
  },

  {
   path:'employee-edit/:id',
  component:EmployeeEditComponent,
  canActivate: [AuthGuard]
  },

  {
   path:'employee-list',
  component:EmployeeListComponent,
  canActivate: [AuthGuard]
  },

  {
   path:'AgGridComponent',
  component:AgGridComponent,
  canActivate: [AuthGuard]
  },

  {
   path:'InterceptorComponent',
  component:InterceptorComponent,
  canActivate: [AuthGuard]
  },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
