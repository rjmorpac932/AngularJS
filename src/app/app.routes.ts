import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaFormulariosComponent } from './pagina-formularios/pagina-formularios.component';

export const routes: Routes = [
    {path: "inicio", title:"Manual Angular - Inicio", component: PaginaInicioComponent},
    {path: "formularios", title:"Manual Angular - Formularios", component: PaginaFormulariosComponent},
    {path:"", pathMatch:"full", redirectTo:"/inicio"},
    {path:"**", redirectTo:"inicio"}
];
