import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Define que es un componente standalone
  imports: [RouterOutlet,FormComponent], // Importa otros módulos necesarios, como RouterOutlet o oto componente que yo quiera
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'mi_primera_pagina_Angular';
}
