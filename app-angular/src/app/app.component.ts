import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado a styleUrls
})
export class AppComponent {
  titulo = 'Universidad Angular'; // Asegúrate de que la propiedad 'titulo' esté definida
}


