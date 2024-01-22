import { Component } from '@angular/core';
import { Input } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-btn-snake',
  standalone: true,
  imports: [],
  templateUrl: './btn-snake.component.html',
  styleUrl: './btn-snake.component.css'
})
export class BtnSnakeComponent {

  @Input() inputText: string = "";
  
  actionHandler(action: string){

    switch(action){

      case "comenzar":
      btnComenzar()
      break;

    }

    function btnComenzar(){
              
      const btnComenzar = document.querySelector("#btnComenzar");

      anime({
        targets: [btnComenzar, btnComenzar?.querySelectorAll("*")],
        height: "0px",
        fontSize: "0px",
        easing: "linear",
        duration: 400
      });
      
    }

  }
}