import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, MostrarMensajeComponent, ReplicadorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado a styleUrls
})
export class AppComponent {
  titulo = 'Property Binding'; // Asegúrate de que la propiedad 'titulo' esté definida
}


