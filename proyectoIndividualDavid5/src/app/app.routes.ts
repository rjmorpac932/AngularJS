import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formularios/formulario-registro/formulario-registro.component';
import { FormularioUsuariosComponent } from './formularios/formulario-usuarios/formulario-usuarios/formulario-usuarios.component';

export const routes: Routes = [
    {path: 'formulario-registro', component: FormularioRegistroComponent},
    {path: 'formulario-usuarios', component: FormularioUsuariosComponent}
];
