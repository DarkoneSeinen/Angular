import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  id: number | null = null;
  nombre: string = '';
  edad: number | null = null;
  mensaje: string = '';

  agregarPersona() {
    if (this.id && this.nombre && this.edad) {
      this.mensaje = 'Agregado correctamente';
    } else {
      this.mensaje = 'Por favor completa todos los campos';
    }
  }
}
