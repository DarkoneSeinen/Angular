"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
let persona1 = new Persona("Juan");
console.log(persona1.getNombre);
