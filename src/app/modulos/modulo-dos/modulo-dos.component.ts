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

cEjemploInputPropiedad = `@Input() nombre: string = ''`;
cEjemploOutputPropiedad = `@Output() onEvento = new EventEmitter<string> ();`;
cEjemploNgModelPropiead = `<input [(ngModel)]="nombre">`;
cEjemploEventBinding = `<button (click)="onClick()">Haz Click</button>`;
cEjemploPropagacionEventoTS = 
`// src/eventoComponent/evento.component.ts
@Output() propagar = new EventEmitter<string>();

onPropagar(){
  this.propagar.emit("Este dato viajará hacia el padre");
}`;
cEjemploPropagacionEventoHTML=
`// src/eventoComponent/evento.component.html
<p>
  <input type="text" [(ngModel)]="mensaje">
  <button (click)="onPropagar()">Propagar</button>
</p>`;
cEjemploEventoCicloVida=
`export clas EjemploComponente implements OnInit{
  ngOnInit(){
    alert("Hola mundo");
  }
}`;
cDirectivaIf =
`@if(usuarioExistente){
  <p>El usuario existe</p>
}@else{
  <p>El usuario no existe</p>
}`;
cDirectivaFor = 
`<ul>
  @for(a of animales; track a.id){
    <li>{{a.especie}}</li>
  }
</ul>`;
cCrearServicio = `ng generate service services/servicio`;

  /* NO TOCAR INDENTACION - FIN */
  
}
