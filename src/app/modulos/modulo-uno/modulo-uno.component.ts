import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-uno',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-uno.component.html',
  styleUrl: '../modulo.css'
})
export class ModuloUnoComponent {

/* NO INDENTAR*/

cNodeComandos = 
`node --version
npm --version`;

cComandoInstalarAngular = `npm install -g @angular/cli`;

cComandoVersionAngular = `ng version`;
/**************/
}
