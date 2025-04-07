import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  descripcionInput: string ="";
  precioInput: number | null = null;

  constructor(private productoService: ProductoService){}

  agregarProducto(evento: Event) {
    evento.preventDefault();
    // Validar que la descripción no esté vacía y que el precio sea mayor a 0
    if (this.descripcionInput.trim() === " "
      || this.precioInput == null || this.precioInput <= 0) {
      console.log("Debe ingresar una descripción y un precio válido");
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    // Agregar el producto al servicio
    this.productoService.agregarProducto(producto);

    // Limpiar los campos de entrada
    this.descripcionInput= "";
    this.precioInput = null;
  }

}
