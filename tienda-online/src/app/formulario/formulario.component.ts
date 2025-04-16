import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  productoId:number |null = null;
  descripcionInput: string ="";
  precioInput: number | null = null;

  constructor(private productoService: ProductoService,
    private router: Router,
    private route : ActivatedRoute
  ){}

  ngOnInit(){
    //verificar si carga un producto existente
    const id= this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;

      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();
    // Validar que la descripción no esté vacía y que el precio sea mayor a 0
    if (this.descripcionInput.trim() === " "
      || this.precioInput == null || this.precioInput <= 0) {
      console.log("Debe ingresar una descripción y un precio válido");
      return;
    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);
    // Agregar el producto al servicio
    this.productoService.guardarProducto(producto);

    // Limpiar los campos de entrada
    this.limpiarFormulario();

    // Redireccionar a la página de principal luego de guardar el producto
    this.router.navigate(['/']);
  }

  cancelar(){
    //redireccionar a la página de principal
    this.router.navigate(['/'])
  }

  eliminarProducto() {
    if (this.productoId !== null) {
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario() {
    this.productoId = null;
    this.descripcionInput= "";
    this.precioInput = null;
  }

}
