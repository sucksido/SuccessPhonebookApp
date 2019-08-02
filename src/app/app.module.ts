import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactData } from './contact-data.service';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { GetContactComponent } from './get-contact/get-contact.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetContactComponent,
    CreateContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(ContactData), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
