import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){

  }

  tipo: string = 'ingresoOperacion';

  descripcionInput: string | null= null;
  valorInput: number | null = null;

  tipoOperacion(evento: Event){
    const select = evento.target as HTMLSelectElement;
    this.tipo = select.value;
  }

  agregarValor(){
    if(this.descripcionInput!= null && this.valorInput != null){
      if(this.tipo === 'ingresoOperacion'){
        this.ingresoService.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput!)
        );
      }else{
        this.egresoService.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
        );
      }
    }else{
      console.log('Introduce un valor y descripcion validos');
    }

    //liemapr campos del form
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
