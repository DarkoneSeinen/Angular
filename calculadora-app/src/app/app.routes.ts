import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { RestaComponent } from './resta/resta.component';
import { PortadaComponent } from './portada/portada.component';

export const routes: Routes = [
  {path: '', component: PortadaComponent},
  {path: 'suma', component: CalculadoraComponent},
  {path: 'resta', component: RestaComponent}
];
