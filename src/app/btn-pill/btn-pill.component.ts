import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-btn-pill',
  standalone: true,
  imports: [],
  templateUrl: './btn-pill.component.html',
  styleUrl: './btn-pill.component.css'
})
export class BtnPillComponent {

  @Input() bgColor = "#31a3ff";
  @Input() hBgColor = "#0089fa";
  @Input() dataHref = "";
  @Input() dataInnerText = "";
  @Input() dataDownload = "";

  mouseHover(event: Event){

    const elemento = event.target;

    if(elemento instanceof HTMLElement){
      elemento.style.backgroundColor = this.hBgColor;
    }

  }

  mouseOut(event: Event){

    const elemento = event.target;

    if(elemento instanceof HTMLElement){
      elemento.style.backgroundColor = this.bgColor;
    }

  }

  
}