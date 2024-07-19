import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
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
    this.form?.reset();

    this.form?.form.patchValue({
      longitude: this.details.longitude,
      latitude: this.details.latitude,
    });
  }
}
