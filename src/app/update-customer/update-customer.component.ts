import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  public customerId!: number;
  public customer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = +params['id']; // Récupérer l'ID du client depuis l'URL
      this.fetchCustomerDetails();
    });
  }

  fetchCustomerDetails() {
    this.customersService.getCustomerById(this.customerId).subscribe(customer => {
      this.customer = customer;
    });
  }

  submitForm() {
    this.customersService.updateCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/admin/customers']); // Rediriger vers la liste des clients après la modification
    });
  }

  goBack() {
    this.router.navigate(['/admin/customers']); // Rediriger vers la liste des clients sans sauvegarder les modifications
  }
}
