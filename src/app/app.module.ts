import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './Interceptor/network.interceptor';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';

import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Userdata1Component } from './component/userdata1/userdata1.component';
import { EmployeeCreateComponent } from './CRUD/employee-create/employee-create.component';
import { EmployeeEditComponent } from './CRUD/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './CRUD/employee-list/employee-list.component';
import { Userdata2Component } from './component/userdata2/userdata2.component';
import { InterceptorComponent } from './component/interceptor/interceptor.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Userdata1Component,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    Userdata2Component,
    InterceptorComponent,
    AgGridComponent,
    HighlightDirective,
    ButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AgGridModule.withComponents([]),
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
