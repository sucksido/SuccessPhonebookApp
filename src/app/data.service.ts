import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ContactData } from './contact-data.service';
import { Contact } from './contact-data';
import { ContactFetch } from './contact-fetch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/contacts';                 // Our created Data can be accessed here at api/contacts
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                    

  private handleError(error: any) {
    console.error(error);                                       
    return throwError(error);
  }
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getContact(id: number): Observable<ContactFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<ContactFetch>(url).pipe(
    catchError(this.handleError)
    );
    }

    addContact (contact: ContactFetch): Observable<ContactFetch> {
      contact.id=null;
      return this.http.post<ContactFetch>(this.apiurl, contact, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteContact(id: number): Observable<ContactFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<ContactFetch>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateContact(contact: ContactFetch): Observable<ContactFetch>{
    const url = `${this.apiurl}/${contact.id}`;
    return this.http.put<ContactFetch>(this.apiurl, contact, this.httpOptions).pipe(
      map(() => contact),
      catchError(this.handleError)
    );
  }
}
