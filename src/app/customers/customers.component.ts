import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {CustomersService} from "../services/customers.service";
import { Router } from '@angular/router';
import {Customer} from "../model/customer.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers: any;
  public dataSource: any;
  public displayedColumns = ['id', 'name', 'email','edit', 'delete',  'viewAccounts'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customersService: CustomersService,private router: Router,
              public authService :AuthService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customersService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editCustomer(id: number) {
    this.router.navigate(['/admin/update-customer', id]);
  }
  deleteCustomer(customer: any) {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.customersService.deleteCustomer(customer.id).subscribe(() => {
        this.fetchCustomers(); // Recharger la liste des clients après la suppression
      });
    }
  }
  filterData(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  viewCustomerAccounts(customer: Customer) {
    // Rediriger vers la page pour afficher les comptes du client avec l'ID correspondant
    this.router.navigateByUrl("/admin/customer-accounts/"+customer.id);
  }

}
