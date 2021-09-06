import { TransactionsService } from './../transactions.service';
import { Transfer } from './../new-transaction/new-transaction.component';
import { Component } from '@angular/core';

export interface TransferExibition extends Transfer {
  date: Date
}

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent {

  transfers: TransferExibition[] = []

  constructor(
    private _transactionsService: TransactionsService
  ){}

  ngOnInit(){
    this._transactionsService.allTransferences().subscribe(transferences => 
      this.transfers = transferences
    )
  }

}
