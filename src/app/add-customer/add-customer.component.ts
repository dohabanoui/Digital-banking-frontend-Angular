import { Component } from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomersService} from "../services/customers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  newCustomer: Customer = { id: 0, name: '', email: '' };

  constructor(private customersService: CustomersService, private router: Router) { }

  addCustomer() {
    this.customersService.addCustomer(this.newCustomer).subscribe(() => {
      this.router.navigate(['/admin/customers']); // Rediriger vers la liste des clients après l'ajout
    });
  }

}
