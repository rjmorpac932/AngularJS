import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-tres',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-tres.component.html',
  styleUrl: '../modulo.css'
})
export class ModuloTresComponent {
 /* NO INDENTAR */
cNuevoProyecto = `ng new ProyectoAngular`;
cNpmInstall = `npm install`;
cNgServe = `ng serve`;
cNgBuild = `ng build`;
cNgTest = `ng test`;
cNgEndToEnd = `ng e2e`;
cNgGenerate =
`ng generate component nombre-del-componente
ng g service nombre-del-servicio
ng g module nombre-del-módulo`;
cNgLint = `ng lint`;
cNgGenerateService = `ng generate service services/servicio`;
cNgGenerateModule =`ng generate module nombre-del-módulo`;
}
