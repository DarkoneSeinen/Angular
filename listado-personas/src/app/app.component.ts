import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listado de personas';
  personas: Persona[]=[
    new Persona("Juan", "Perez"), 
    new Persona("Laura", "Juarez"), 
    new Persona("Karla", "Lara")
  ];

  nombreInput: String="";
  apellidoInput: String="";

  agregarPersona(){
    let persona1 =new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
