import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0)
  ];

  descripcionInput: string= "";
  precioInput: number | null = null;

  agregarProducto() {
    // Validar que la descripción no esté vacía y que el precio sea mayor a 0
    if (this.descripcionInput.trim() === " " || this.precioInput == null || this.precioInput <= 0) {
      console.log("Debe ingresar una descripción y un precio válido");
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    // Limpiar los campos
    this.descripcionInput = "";
    this.precioInput = null;
  }

}
