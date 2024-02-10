import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegosComponent } from './formularios/videojuegos/videojuegos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_individual_jmmb';
}
