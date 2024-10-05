import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true, // Lo defines como standalone
  templateUrl: './personas.component.html',
})

export class personasComponent {
  nombre = 'John Doe';
  edad = 30;
  id=1110989
}
