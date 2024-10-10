import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() personaCreada= new EventEmitter<Persona>();

  nombreInput: String="";
  apellidoInput: String="";

  agregarPersona(){
    let persona1 =new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }

}
