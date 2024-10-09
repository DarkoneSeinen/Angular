import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  deshabilitar=false;
  title="ingeniero";
  mensaje="";
  mostrar=false;

  agregarPersona(){
    this.mostrar=true;
    this.mensaje="Agregado correctamente";
  }

}
