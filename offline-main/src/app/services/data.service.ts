import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contactDetails: any[] = [];

  contacts = JSON.parse(localStorage.getItem('contacts') || '[]')


  displayContacts() {
    for (let i = 0; i < this.contacts.length; i++) {
      this.contactDetails.push(this.contacts[i])
    }
  }

  addToContacts(details: {}) {
    this.contacts.push(details)

    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }


  // private formDataSubject = new BehaviorSubject<any>(null); // Initialize with null or default value
  // formData$ = this.formDataSubject.asObservable();

  // constructor() { }

  // sendFormData(formData: any) {
  //   this.formDataSubject.next(formData);
  // }
}
