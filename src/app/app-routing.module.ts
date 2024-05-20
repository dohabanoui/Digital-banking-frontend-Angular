import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {authorizationGuard} from "./guards/authorization.guard";

const routes: Routes = [
  {path : '',redirectTo : '/login',pathMatch :"full"},
  {path : 'login',component : LoginComponent},
  {path : "admin" , component : AdminTemplateComponent , canActivate : [AuthenticationGuard] , children : [
      { path: 'customers', component: CustomersComponent },
      { path: 'accounts', component: AccountsComponent },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
        canActivate: [AuthenticationGuard, authorizationGuard],
        data: { role: "ADMIN" }
      },

      { path: 'update-customer/:id', component: UpdateCustomerComponent , canActivate : [AuthenticationGuard, authorizationGuard] , data: {role : "ADMIN"}},
      { path: 'customer-accounts/:id', component: CustomerAccountComponent },
      { path: 'notAuthorized', component: NotAuthorizedComponent }
    ]},



  { path: '', redirectTo: '/customers', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
