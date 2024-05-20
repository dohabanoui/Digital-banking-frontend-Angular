import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http : HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers")
  }
  public deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8085/customers/${customerId}`);
  }
  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8085/customers", customer);
  }
  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:8085/customers/' + customer.id, customer);
  }
  public getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8085/customers/${customerId}`);
  }

}
