import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { RestaComponent } from './resta/resta.component';

export const routes: Routes = [
  {path: '', component: CalculadoraComponent},
  {path: 'resta', component: RestaComponent}
];
