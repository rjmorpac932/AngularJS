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

    const separator = document.querySelector("#angular-animation-separator");
    const mainTitle = document.querySelector("#main-title");
    const modulosSection = document.querySelector("#modulos");
    const videoManual = document.querySelector("#video-manual");
    const videoAnimacionAngular = document.querySelector("#angular-animacion-video");

    if (mainTitle instanceof HTMLElement && modulosSection instanceof HTMLElement && videoManual instanceof HTMLIFrameElement && videoAnimacionAngular instanceof HTMLVideoElement) {

      videoAnimacionAngular.play();

      setTimeout(() => {

        videoManual.style.display = "block";

      }, 2000);

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