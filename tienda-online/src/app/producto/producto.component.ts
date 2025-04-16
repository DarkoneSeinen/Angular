import { Component, Input } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto!: Producto;

  constructor(private router: Router){

  }

  editarProducto(id:number){
    //pasar el id en la url
    this.router.navigate(['/editar',id])
  }


}
