import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountDetails, AccountOperation } from '../model/account.model';
import { AccountService } from '../services/account.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountId!: string;
  selectedAccount: AccountDetails | null = null;
  operations: AccountOperation[] = [];
  operationFormGroup!: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder
  , public authService : AuthService) { }

  ngOnInit(): void {
    this.operationFormGroup = this.formBuilder.group({
      operationType: ['', Validators.required],
      accountDestination: [''],
      amount: ['', Validators.required],
      description: ['']
    });
  }

  searchAccount(): void {
    if (!this.accountId) {
      // Gérer le cas où aucun ID de compte n'est saisi
      return;
    }

    // Récupérer les informations sur le compte
    this.accountService.getAccount(this.accountId).subscribe(account => {
      this.selectedAccount = account;
    });

    // Récupérer les opérations du compte
    this.accountService.getAccountHistory(this.accountId).subscribe(operations => {
      this.operations = operations;
    });
  }

  handleAccountOperation(): void {
    const operationType: string = this.operationFormGroup.value.operationType;
    const amount: number = this.operationFormGroup.value.amount;
    const description: string = this.operationFormGroup.value.description;
    const accountDestination: string = this.operationFormGroup.value.accountDestination;

    if (operationType === 'DEBIT') {
      this.accountService.debit(this.accountId, amount, description).subscribe(() => {
        // Mettre à jour les opérations après une opération réussie
        this.searchAccount();
        this.operationFormGroup.reset();
      });
    } else if (operationType === 'CREDIT') {
      this.accountService.credit(this.accountId, amount, description).subscribe(() => {
        // Mettre à jour les opérations après une opération réussie
        this.searchAccount();
        this.operationFormGroup.reset();
      });
    } else if (operationType === 'TRANSFER') {
      this.accountService.transfer(this.accountId, accountDestination, amount).subscribe(() => {
        // Mettre à jour les opérations après une opération réussie
        this.searchAccount();
        this.operationFormGroup.reset();
      });
    }
  }
}
