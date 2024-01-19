import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AngularAnimationComponent } from './angular-animation/angular-animation.component';
import { ModuloUnoComponent } from './modulos/modulo-uno/modulo-uno.component';
import { ModuloDosComponent } from './modulos/modulo-dos/modulo-dos.component';
import { ModuloTresComponent } from './modulos/modulo-tres/modulo-tres.component';
import { ModuloEventosComponent } from './modulos/modulo-eventos/modulo-eventos.component';
import { BtnPillComponent } from './btn-pill/btn-pill.component';
import { BtnModoComponent } from './btn-modo/btn-modo.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClipboardComponent,CommonModule, RouterOutlet, AngularAnimationComponent, ModuloUnoComponent, ModuloDosComponent, ModuloTresComponent, ModuloEventosComponent, BtnPillComponent, BtnModoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Manual_Angular';
}