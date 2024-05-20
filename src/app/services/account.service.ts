import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails, AccountOperation} from "../model/account.model";


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8085'; // Remplacez cette URL par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAccount(accountId: string): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.baseUrl}/accounts/${accountId}`);
  }

  getAccounts(): Observable<AccountDetails[]> {
    return this.http.get<AccountDetails[]>(`${this.baseUrl}/accounts`);
  }

  getAccountHistory(accountId: string): Observable<AccountOperation[]> {
    return this.http.get<AccountOperation[]>(`${this.baseUrl}/accounts/${accountId}/operations`);
  }

  debit(accountId: string, amount: number, description: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/accounts/debit`, { accountId, amount, description });
  }

  credit(accountId: string, amount: number, description: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/accounts/credit`, { accountId, amount, description });
  }

  transfer(accountSource: string, accountDestination: string, amount: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/accounts/transfer`, { accountSource, accountDestination, amount });
  }
}
