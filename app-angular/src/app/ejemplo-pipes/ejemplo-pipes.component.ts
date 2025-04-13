import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {

  empleados = [
    {
      nombre: 'Juan',
      sueldo: 50000,
      fechaNacimiento: new Date('2000-08-01')
    },
    {
      nombre: 'Pedro',
      sueldo: 60000,
      fechaNacimiento: new Date('1990-05-15')
    },
    {
      nombre: 'Maria',
      sueldo: 70000,
      fechaNacimiento: new Date('1985-12-20')
    }
  ]

}
