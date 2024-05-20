import { Component } from '@angular/core';
import {Customer} from "../model/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomersService} from "../services/customers.service";

class CustomerService {
}

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {
  customerId!: number;
  customer!: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomersService) { }

  ngOnInit(): void {
    // Récupérer l'ID du client depuis les paramètres de l'URL
    this.customerId = this.route.snapshot.params['id'];

    // Appeler le service pour récupérer les informations du client
    this.customerService.getCustomerById(this.customerId).subscribe(customer => {
      this.customer = customer;
    });
  }
}
