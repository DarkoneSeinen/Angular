import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FloatLabelModule, PanelModule, FormsModule, CommonModule],
  templateUrl: './resta.component.html',
  styleUrl: './resta.component.css'
})
export class RestaComponent {
  operandoA: number | null = null; // Primer operando
  operandoB: number | null = null; // Segundo operando
  resultado: number | null = null; // Resultado de la resta

  // Método para realizar la resta
  restar(): void {
    if (this.operandoA !== null && this.operandoB !== null) {
      this.resultado = this.operandoA - this.operandoB;
      console.log(`Resultado de la resta: ${this.resultado}`);
    } else {
      console.log('Faltan operandos para realizar la resta');
      this.resultado = null; // Reinicia el resultado si faltan operandos
    }
  }
}
