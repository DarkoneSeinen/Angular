import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, FloatLabelModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  operandoA: number | null = null;
  operandoB: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar(){
    if(this.operandoA != null && this.operandoB != null){
      const resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado);
    }else{
      console.log("Faltan operandos");
    }

  }

}
