import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent { // Poner Input en el import
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    // Emitir el mensaje al padre con evento (cadena)
    this.notificarPadre.emit("Mensaje desde el componente hijo");
  }

}
