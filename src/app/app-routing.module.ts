import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'list-transferences', component: ListTransactionComponent },
  { path: 'new-transference', component: NewTransactionComponent },
  { path: '**', component: ListTransactionComponent},
  { path: '', redirectTo: 'list-transferences', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}