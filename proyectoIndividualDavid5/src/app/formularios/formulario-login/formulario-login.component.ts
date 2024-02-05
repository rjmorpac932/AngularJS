import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor(private http: HttpClient){}

}
