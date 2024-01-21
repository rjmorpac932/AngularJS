import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-eventos',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-eventos.component.html',
  styleUrl: '../modulo.css'
})
export class ModuloEventosComponent {

  /* NO INDENTAR */

cEjemploEventBinding = `<button (click)=”holaMundo()”>Decir hola</button>`;
cEjemploHolaMundo =
`export miComponente{
  holaMundo(){
    alert(“Hola Mundo desde el componente”);
  }  
}`;
cCambioAtributoTS = 
`// src/miComponente/mi-componente.component.ts
export miComponente{
  isLogged = false;
}`;
cCambioAtributoHTML = `<button (click)=”isLogged = true”>Login</button>`;
cManejoEventosHTML=`<button id=”login” (click)=”btnHandler($event)”>Login</button>`;
cManejoEventosTS =
`// src/miComponente/mi-componente.component.ts

export miComponente{

  isLogged = false;
  
  btnHandler(event: Event){
    if(event.target.getAttribute(“id”) === “login”){
      this.isLogged = true;
    }
  }
}`;
cEventoTeclaUno = `([evento]) = “[funcion]”;  (keydown) = “sayHi($event)”`;
cEventoTeclaDos = `([evento].[tecla].[tecla]) = “[funcion]”;  (keydown.shift.t) = “sayHi($event)”`;
cEjemploCicloVida = 
`export miComponente implements OnInit{

  ngOnInit(): void{
    holaMundo();
  }
    
  holaMundo(){
    alert(“Hola Mundo”);
  }

}`;

  /* NO INDENTAR - FIN */

}
