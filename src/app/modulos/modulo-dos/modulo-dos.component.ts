import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';
@Component({
  selector: 'app-modulo-dos',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-dos.component.html',
  styleUrl: '../modulo.css'
})

export class ModuloDosComponent {
  
  /* NO TOCAR INDENTACION */

cGeneracionComponente = `ng generate component componente_ejemplo`;
cEjemploComponente =
`// app/form/form.component.ts
import {Component} from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})

export class FormComponent{}`;
  /************************/
}
