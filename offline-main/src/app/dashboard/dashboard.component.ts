import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  details = [
    {
      name: 'Paul Silas',
      phoneNumber: '+234-906-962-5266',
      email: 'paul.silas@example.com',
      addresses: ['Maryland St, Ikeja, Lagos'],
      longitude: 6.605874,
      latitude: 3.349149,
    },
  ];

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
    this.details.forEach((data) => {
      L.marker([data.latitude, data.longitude])
        .addTo(this.map)
        .bindPopup(`<b>${data.name}</b><br>${data.addresses[0]}`);
    });
  }
}
