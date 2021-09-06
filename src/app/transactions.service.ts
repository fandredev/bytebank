import { TransferExibition } from './list-transaction/list-transaction.component';
import { Transfer } from './new-transaction/new-transaction.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transferencesList: TransferExibition[] = []
  private url = 'http://localhost:3000/transferences'

  constructor(private _httpClient: HttpClient) {}

  get transferences(){
    return this.transferencesList
  }

  allTransferences() : Observable<TransferExibition[]>{
    return this._httpClient.get<TransferExibition[]>(this.url)
  }

  add(fields: Transfer) : Observable<TransferExibition>{
    const newTransfer = Object.freeze({...fields, date: new Date()})
    
    return this._httpClient.post<TransferExibition>(this.url, newTransfer)
  }

}
