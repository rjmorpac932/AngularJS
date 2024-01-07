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
      this.modo = this.tipoModo.DIA;
    }else{
      document.documentElement.style.colorScheme = "dark";
      this.modo = this.tipoModo.NOCHE;
    }

  }

}
