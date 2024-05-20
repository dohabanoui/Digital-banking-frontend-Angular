import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {appHttpInterceptor} from "./interceptors/app-http.interceptor";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    CustomerAccountComponent,
    LoginComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    MatIconModule,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginator,
    HttpClientModule,
    FormsModule,
    MatRadioButton,
    MatRadioGroup
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: appHttpInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
