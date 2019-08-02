import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../contact-data';
import { DataService } from '../data.service';
import { ContactFetch } from '../contact-fetch';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html'
})
export class CreateContactComponent implements OnInit {
  contactFormGroup: FormGroup;
  contacts: Contact[];
  contact: ContactFetch;

  constructor(private dataservice: DataService){}
  getContacts(){
    this.dataservice.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }
  ngOnInit() {
    this.contactFormGroup = new FormGroup(
      {
        name : new FormControl(''),
        surname : new FormControl(''),
        phone : new FormControl('')
      },
    );
    this.getContacts();
}


addContact() {
  this.dataservice.addContact(this.contactFormGroup.value).subscribe(data => {
    this.contact = data;
    console.log(this.contact);
  });
  this.getContacts();
}
}
