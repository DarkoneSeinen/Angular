import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardianService } from './servicios/login-guardian.service';

export const routes: Routes = [
  {path: '', component: ListadoProductosComponent, canActivate:[LoginGuardianService]}, // componete que se vera al iniciar la app
  {path: 'listado',component: ListadoProductosComponent, canActivate:[LoginGuardianService]}, // componente que se vera al iniciar la app
  {path : 'agregar', component: FormularioComponent, canActivate:[LoginGuardianService]}, // componente que se vera al iniciar la app
  {path : 'editar/:llave', component:FormularioComponent, canActivate:[LoginGuardianService]}, // componente que se vera al iniciar la app
  {path : 'login', component: LoginComponent},
  // ruta comodin(de error)
  {path: '**', component: ErrorComponent}
];
