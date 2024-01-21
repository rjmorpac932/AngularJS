import { Component} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard'
import { Input } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [ClipboardModule, FontAwesomeModule],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.css'
})

export class ClipboardComponent{

  @Input() contenido: string = "";

  faCopy = faCopy;
  isAnimationRun = false;
  
  showCopiado(){
  
    const mensajeCopiado = document.querySelector("#mensaje_copiado");
    
    if(mensajeCopiado instanceof HTMLSpanElement && !this.isAnimationRun){

      this.isAnimationRun = true;
      mensajeCopiado.style.display = "flex";

      anime({
        targets: mensajeCopiado,
        height: "60px",
        duration: 500
      });

      setTimeout( () => {

        anime({
          targets: mensajeCopiado,
          height: "0px",
          marginTop: "60px",
          duration: 200,
          easing: "linear"
        });

        setTimeout( () => {
          mensajeCopiado.style.display="none";
        },150)

        setTimeout( () => {
          mensajeCopiado.style.marginTop = "0px";
          this.isAnimationRun = false;
        },250)

      },450);

    }

  }

}