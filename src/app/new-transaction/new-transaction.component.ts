import { TransactionsService } from './../transactions.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export type Transfer = {
  value: number
  destiny: number
}

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent  {

  value: number
  destiny: number

  constructor(
    private _transactionsService: TransactionsService,
    private _router: Router
    ){}

  transfer(){
    const { value, destiny } = this
    this._transactionsService.add({ value, destiny }).subscribe(() => {
      this._router.navigateByUrl('list-transferences')
    }, error => console.error(error))
  }

}
