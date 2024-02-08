import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, FormularioRegistroComponent],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  usuarios = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient){
    this.usuarios;
  }

  public buscarUsuarioLogin(){
    this.http.get(`http://localhost:9999/formularios/usuarios?usuario=${this.usuarios.value.usuario}&password=${this.usuarios.value.password}`).subscribe(
      (data) =>{
        if(data == null){
          alert("Este usuario o contraseña no existen, por favor, regístrese");
        }else{
          alert("Login correcto");
        }
      }
    );
  }
  public cancelarLogin(){
    this.usuarios.reset();
  }

}
