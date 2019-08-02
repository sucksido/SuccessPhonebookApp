import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contact', component: GetContactComponent},
  {path: 'create', component: CreateContactComponent},
  {path: 'delete', component: DeleteContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
