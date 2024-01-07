import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AngularAnimationComponent } from './angular-animation/angular-animation.component';
import { ModuloUnoComponent } from './modulo-uno/modulo-uno.component';
import { ModuloDosComponent } from './modulo-dos/modulo-dos.component';
import { ModuloTresComponent } from './modulo-tres/modulo-tres.component';
import { BtnPillComponent } from './btn-pill/btn-pill.component';
import { BtnModoComponent } from './btn-modo/btn-modo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AngularAnimationComponent, ModuloUnoComponent, ModuloDosComponent, ModuloTresComponent, BtnPillComponent, BtnModoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Manual_Angular';
}