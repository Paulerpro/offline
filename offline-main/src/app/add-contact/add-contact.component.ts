import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {

  constructor(private dataService: DataService) { }

  @ViewChild('contactForm') form: NgForm | undefined;

  details = {
    name: '',
    phoneNumber: '',
    email: '',
    addresses: [''],
    longitude: 6.605874,
    latitude: 3.349149,
  };

  addAddress() {
    if (this.details.addresses.length < 5) {
      this.details.addresses.push('');
    }
  }

  removeAddress(index: number) {
    if (this.details.addresses.length > 1) {
      this.details.addresses.splice(index, 1);
    }
  }

  submitForm() {
    // let contacts = JSON.parse(localStorage.getItem('contacts') || '[]')

    // contacts.push(this.details)

    // localStorage.setItem('contacts', JSON.stringify(contacts))

    this.dataService.addToContacts(this.details)

    this.form?.resetForm();

    this.details.longitude = 6.605874;
    this.details.latitude = 3.349149;

  }

}
