import { Component, AfterViewInit, inject } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {

  contactDetails: any[] = [];

  dataService: DataService = inject(DataService)

  ngOnInit(): void {

    this.dataService.displayContacts()

    // let contacts = JSON.parse(localStorage.getItem('contacts') || '[]')

    // for (let i = 0; i < contacts.length; i++) {
    //   this.contactDetails.push(contacts[i])
    // }
  }

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    this.map = L.map('map').setView([6.605874, 3.349149], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  private addMarkers(): void {
    this.contactDetails.forEach((data) => {
      L.marker([data.latitude, data.longitude])
        .addTo(this.map)
        .bindPopup(`<b>${data.name}</b><br>${data.addresses[0]}`);
    });
  }

}

  // contactDetails = [
  //   {
  //     name: 'Paul Silas',
  //     phoneNumber: '+234-906-962-5266',
  //     email: 'paul.silas@example.com',
  //     addresses: ['Maryland St, Ikeja, Lagos'],
  //     longitude: 6.605874,
  //     latitude: 3.349149,
  //   },
  // ];
