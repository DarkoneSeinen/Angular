import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [LoggingService]
})
export class FormularioComponent {

  constructor(private LoggingService: LoggingService){

  }
  @Output() personaCreada= new EventEmitter<Persona>();

  //nombreInput: String="";
  //apellidoInput: String="";

  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    let persona1 =new Persona(nombreInput.value, apellidoInput.value);
    //this.personas.push(persona1);
    this.LoggingService.enviaMensaje("se envia"+ persona1.nombre+" "+persona1.apellido);
    this.personaCreada.emit(persona1);
  }

}
