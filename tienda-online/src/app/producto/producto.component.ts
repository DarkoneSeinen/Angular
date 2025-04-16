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
  @Input() llave!:string;

  constructor(private router: Router){

  }

  editarProducto(){
    //pasar el id en la url
    this.router.navigate(['/editar',this.llave])
  }


}
