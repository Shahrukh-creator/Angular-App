import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/Authentication/login/login.component';
import { RegisterComponent } from './component/Authentication/register/register.component';
import { DashboardComponent } from './component/Authentication/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/Authentication/forgot-password/forgot-password.component';

import { EmployeeCreateComponent } from './component/CRUD/employee-create/employee-create.component';
import { EmployeeEditComponent } from './component/CRUD/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './component/CRUD/employee-list/employee-list.component';

import { Userdata1Component } from './component/ProfileDisplay/userdata1/userdata1.component';
import { Userdata2Component } from './component/ProfileDisplay/userdata2/userdata2.component';

import { AuthGuard } from './guards/auth.guard';

import { AgGridComponent } from './component/ag-grid/ag-grid.component';

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

  {
   path:'ForgotPasswordComponent',
  component:ForgotPasswordComponent,
  // canActivate: [AuthGuard]
  },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
