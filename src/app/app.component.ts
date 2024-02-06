import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioGetComponent } from './Formularios/formulario-get/formulario-get.component';
import { FormularioPostComponent } from './Formularios/formulario-post/formulario-post.component';
import { FormularioUpdateComponent } from './Formularios/formulario-update/formulario-update.component';
import { FormularioDeleteComponent } from './Formularios/formulario-delete/formulario-delete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormularioGetComponent, FormularioPostComponent, FormularioUpdateComponent, FormularioDeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularJs';
}
