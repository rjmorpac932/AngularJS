import { Component } from '@angular/core';
import { BtnSnakeComponent } from '../btn-snake/btn-snake.component';
import anime from 'animejs';

@Component({
  selector: 'app-angular-animation',
  standalone: true,
  imports: [BtnSnakeComponent],
  templateUrl: './angular-animation.component.html',
  styleUrl: './angular-animation.component.css'
})

export class AngularAnimationComponent {

  animacion() {

    const svgAnimacion = document.querySelector("#angular-animation-svg");
    const fondoAnimacion = document.querySelector("#angular-animation-fondo");
    const angularLogo = document.querySelector("#angular-animation-logo");
    const youtubeLogo = document.querySelector("#angular-animation-yt");
    const separator = document.querySelector("#angular-animation-separator");
    const mainTitle = document.querySelector("#main-title");
    const modulosSection = document.querySelector("#modulos");
    const videoManual = document.querySelector("#video-manual");

    if (svgAnimacion instanceof SVGElement && fondoAnimacion instanceof SVGRectElement && angularLogo instanceof SVGGElement && youtubeLogo instanceof SVGPathElement
       && mainTitle instanceof HTMLElement && modulosSection instanceof HTMLElement && videoManual instanceof HTMLIFrameElement) {

      fondoAnimacion.style.width = "100%";
      fondoAnimacion.style.height = "100%";
      fondoAnimacion.style.transform = "translateX(0px) translateY(0px)";


      setTimeout(() => {
        angularLogo.style.scale = "40";
        angularLogo.style.transform = "translateX(-1292.5px) translateY(-607px)";

      }, 300);

      setTimeout(() => {
        youtubeLogo.style.display = "inline-block";
      }, 1100);

      setTimeout(() => {

        anime({
          targets: svgAnimacion,
          opacity: 0,
          duration: 600,
          easing: "linear"
        });

        setTimeout(() => {
        videoManual.style.opacity = "100%";
        },400);

        videoManual.style.display = "block";

      }, 1800);

      mainTitle.style.display = "flex";
      modulosSection.style.display = "flex";
    }

    BtnSnakeComponent.prototype.actionHandler("comenzar");
    anime({
      targets: separator,
      width: "100%",
      easing: 'linear',
      duration: 1000
    });


  }

}