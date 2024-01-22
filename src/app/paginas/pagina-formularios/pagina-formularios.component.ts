import { Component } from '@angular/core';
import { FormularioAltaComponent } from '../../formularios/formulario-alta/formulario-alta.component';
import { FormularioLoginComponent } from '../../formularios/formulario-login/formulario-login.component';
import { FormularioBajaComponent } from '../../formularios/baja-de-alumnos/baja-de-alumnos.component';
import { FormularioRegistroComponent } from '../../formularios/formulario-registro/formulario-registro.component';

@Component({
  selector: 'app-pagina-formularios',
  standalone: true,
  imports: [FormularioAltaComponent, FormularioLoginComponent, FormularioBajaComponent, FormularioRegistroComponent],
  templateUrl: './pagina-formularios.component.html',
  styleUrl: './pagina-formularios.component.css'
})
export class PaginaFormulariosComponent {

}
