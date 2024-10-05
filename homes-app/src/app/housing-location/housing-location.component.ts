import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listening">
      <img class="listening-photo" [src]="housingLocation.photo"
        alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listening-heading">{{housingLocation.name}}</h2>
      <p class="listening-location">{{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;

}
