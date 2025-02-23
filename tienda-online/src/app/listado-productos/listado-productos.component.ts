import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  standalone: true, // esto es imporante añadir manualmente
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

}
