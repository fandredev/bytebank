import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt'

import { AppComponent } from './app.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [	
    AppComponent,
    NewTransactionComponent,
      ListTransactionComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
