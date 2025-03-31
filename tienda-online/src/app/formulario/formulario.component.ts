import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Producto } from '../producto/producto.model';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event) {
    evento.preventDefault();
    // Validar que la descripción no esté vacía y que el precio sea mayor a 0
    if (this.descripcionInput.nativeElement.value.trim() === " "
      || this.precioInput == null || this.precioInput.nativeElement.value <= 0) {
      console.log("Debe ingresar una descripción y un precio válido");
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value);
    // Emitir el evento con el nuevo producto
    this.nuevoProducto.emit(producto);

    // Limpiar los campos de entrada
    this.descripcionInput.nativeElement.value = null;
    this.precioInput.nativeElement.value = null;
  }

}
