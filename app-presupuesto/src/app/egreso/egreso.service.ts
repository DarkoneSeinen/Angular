import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }

  egresos: Egreso[] = [
    new Egreso('Renta Depto', 900),
    new Egreso('Ropa', 200)
  ]

  eliminar(egreso: Egreso) {
    const index = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }
}
