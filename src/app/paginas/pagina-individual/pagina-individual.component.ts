import { Component } from '@angular/core';
import { FormularioJMCComponent } from '../../formularios/formularios-individuales/formulario-jmc/formulario-jmc.component';

@Component({
  selector: 'app-pagina-individual',
  standalone: true,
  imports: [FormularioJMCComponent],
  templateUrl: './pagina-individual.component.html',
  styleUrl: './pagina-individual.component.css'
})
export class PaginaIndividualComponent {

}
