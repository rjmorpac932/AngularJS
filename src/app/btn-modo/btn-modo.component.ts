import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-modo',
  standalone: true,
  imports: [],
  templateUrl: './btn-modo.component.html',
  styleUrl: './btn-modo.component.css'
})
export class BtnModoComponent {

  tipoModo = {
    DIA: "DIA",
    NOCHE: "NOCHE"
  }

  modo = this.tipoModo.NOCHE;

  modoHandler(){

    if(this.modo === this.tipoModo.NOCHE){

      document.documentElement.style.colorScheme = "light";

      document.querySelectorAll("details").forEach(detail => {
        if(detail instanceof HTMLDetailsElement){
          detail.style.backgroundColor = "#CACACA";
        }
      });
      
      document.querySelectorAll(".summary-chevron-down, .summary-chevron-up").forEach(flecha => {

        if(flecha instanceof HTMLElement){
          flecha.style.backgroundColor = "#CACACA";
        }

      });

      this.modo = this.tipoModo.DIA;

    }else{

      document.documentElement.style.colorScheme = "dark";

      document.querySelectorAll("details").forEach(detail => {
        if(detail instanceof HTMLDetailsElement){
          detail.style.backgroundColor = "#262626";
        }
      });

      document.querySelectorAll(".summary-chevron-down, .summary-chevron-up").forEach(flecha => {

        if(flecha instanceof HTMLElement){
          flecha.style.backgroundColor = "#262626";
        }

      });

      this.modo = this.tipoModo.NOCHE;
    }

  }

}
