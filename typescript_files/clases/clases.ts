class Persona {
  private nombre: string;

  constructor(nombre: string){
    this.nombre = nombre;

  }

  getNombre(): string {
    return this.nombre;
  }
}

let persona1= new Persona("Juan");
console.log(persona1.getNombre);
