import { Component } from '@angular/core';
import { AngularAnimationComponent } from '../../angular-animation/angular-animation.component';
import { BtnPillComponent } from '../../btn-pill/btn-pill.component';
import { ModuloUnoComponent } from '../../modulos/modulo-uno/modulo-uno.component';
import { ModuloDosComponent } from '../../modulos/modulo-dos/modulo-dos.component';
import { ModuloTresComponent } from '../../modulos/modulo-tres/modulo-tres.component';
import { ModuloCuatroComponent } from '../../modulos/modulo-cuatro/modulo-cuatro.component';
import { ModuloEventosComponent } from '../../modulos/modulo-eventos/modulo-eventos.component';
import { ModuloSeisComponent } from '../../modulos/modulo-seis/modulo-seis.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [AngularAnimationComponent, BtnPillComponent, ModuloUnoComponent, ModuloDosComponent, ModuloTresComponent, ModuloCuatroComponent, ModuloEventosComponent, ModuloCuatroComponent, ModuloSeisComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css',
})
export class PaginaInicioComponent {}
