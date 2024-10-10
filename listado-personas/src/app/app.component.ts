import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model'; 
import { CommonModule } from '@angular/common';
import { PersonaComponent } from "./persona/persona.component";
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, PersonaComponent, FormularioComponent],
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

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}
