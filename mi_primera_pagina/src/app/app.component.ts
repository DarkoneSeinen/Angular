import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { personasComponent } from './personas/personas.component'; //se importa el compoente con su ruta de acceso

@Component({
  selector: 'app-root',
  standalone: true,  // Define que es un componente standalone
  imports: [RouterOutlet,personasComponent], // Importa otros módulos necesarios, como RouterOutlet o oto componente que yo quiera
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambia a "styleUrls"
})
export class AppComponent {
  title = 'mi_primera_pagina_Angular';
}
