import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { SaludarComponent } from './saludar/saludar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado a styleUrls
})
export class AppComponent {
  titulo = 'Two way Binding en Angular'; // Asegúrate de que la propiedad 'titulo' esté definida
}


