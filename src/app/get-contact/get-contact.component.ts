import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Contact } from '../contact-data';
import { ContactFetch } from '../contact-fetch';



@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html'
})
export class GetContactComponent implements OnInit {


  displayData: boolean;
  contact: ContactFetch;
  contacts: Contact[] = [];
  constructor(private dataservice: DataService){}
  getContacts(){
    this.dataservice.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }
  fetchId = 0;

  getContact() {
    this.dataservice.getContact(this.fetchId).subscribe(data => {
      this.contact = data;
     this.displayData=true;
    });
  }

  idtoUpdate = 0;
  updateContact() {
    this.dataservice.getContact(this.idtoUpdate).subscribe(data => {
      this.contact = data;
      this.contact.phone = '0728541198 - Updated Phone Number';
      this.dataservice.updateContact(this.contact).subscribe(data1 => {
        this.getContacts();
      });
    });
  }


  ngOnInit() {
    this.getContacts();
    this.getContact();
  }

}
