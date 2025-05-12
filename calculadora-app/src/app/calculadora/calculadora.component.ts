import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ResultadoComponent } from '../resultado/resultado.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ResultadoComponent, NavBarComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultadoPadre: number = 0;

  procesarResultado(resultadoHijo: number){
    this.resultadoPadre = resultadoHijo;
  }


}
