import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aplicacion-calculadora';
  resultadoPadre: number=0;

  procesarResultado(resultado:number){
    this.resultadoPadre=resultado;

  }

}
