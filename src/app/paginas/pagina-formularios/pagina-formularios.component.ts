import { Component } from '@angular/core';
import { FormularioAltaComponent } from '../../formularios/formulario-alta/formulario-alta.component';
import { FormularioLoginComponent } from '../../formularios/formulario-login/formulario-login.component';
import { FormularioBajaComponent } from '../../formularios/baja-de-alumnos/baja-de-alumnos.component';
import { FormularioRegistroComponent } from '../../formularios/formulario-registro/formulario-registro.component';
import { FormularioBusquedaComponent } from '../../formularios/formulario-busqueda/formulario-busqueda.component';
import { FormularioUsuariosComponent } from '../../formularios/formulario-usuarios/formulario-usuarios.component';

@Component({
  selector: 'app-pagina-formularios',
  standalone: true,
  imports: [FormularioUsuariosComponent,FormularioAltaComponent, FormularioLoginComponent, FormularioBajaComponent, FormularioRegistroComponent, FormularioBusquedaComponent],
  templateUrl: './pagina-formularios.component.html',
  styleUrl: './pagina-formularios.component.css'
})
export class PaginaFormulariosComponent {

}
