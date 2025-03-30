import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { SaludarComponent } from './saludar/saludar.component';
import { ComponenteIfComponent } from './componente-if/componente-if.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ComponenteForComponent } from './componente-for/componente-for.component';
import { PadreComponent } from "./padre/padre.component";
import { ViewChildComponent } from './view-child/view-child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, PadreComponent, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado a styleUrls
})
export class AppComponent {
  titulo = 'Decorador @ViewChild'; // Asegúrate de que la propiedad 'titulo' esté definida
}


