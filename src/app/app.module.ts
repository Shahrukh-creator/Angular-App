import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './Utilities/Interceptor/network.interceptor';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './component/ag-grid/ag-grid.component';

import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';

import { LoginComponent } from './component/Authentication/login/login.component';
import { RegisterComponent } from './component/Authentication/register/register.component';
import { DashboardComponent } from './component/Authentication/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/Authentication/forgot-password/forgot-password.component';
import { Userdata1Component } from './component/ProfileDisplay/userdata1/userdata1.component';
import { Userdata2Component } from './component/ProfileDisplay/userdata2/userdata2.component';

import { EmployeeCreateComponent } from './component/CRUD/employee-create/employee-create.component';
import { EmployeeEditComponent } from './component/CRUD/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './component/CRUD/employee-list/employee-list.component';

import { ButtonComponent } from './component/button/button.component';

import { InterceptorComponent } from './component/interceptor/interceptor.component';
import { HighlightDirective } from './Directive/highlight.directive';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Userdata1Component,
    Userdata2Component,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    InterceptorComponent,
    AgGridComponent,
    HighlightDirective,
    ButtonComponent,
    ForgotPasswordComponent
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
   TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

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
