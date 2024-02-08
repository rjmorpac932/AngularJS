import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosDTO } from '../../../dto/UsuariosDTO';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

  usuarios = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient){}

  public registro(){
    this.http.post('http://localhost:9999/formularios/usuarios',{
      nombre: this.usuarios.value.nombre,
      usuario: this.usuarios.value.usuario,
      email: this.usuarios.value.email,
      password: this.usuarios.value.password,
      fechaNacimiento: this.usuarios.value.fechaNacimiento
    }).subscribe({
      next: (response) => {
        if(response == null){
          alert('Error al registrar usuario');
        }else{
          alert('Usuario correctamente registrado');
        }
      }
    });
  }

  public cancelarRegistro(){
    this.usuarios.reset();
  }

  public mostrarListado(){
    this.usuarios.reset();
     return this.http.get<UsuariosDTO[]>('http://localhost:9999/formularios/allUsuarios').subscribe({
      next: (data) =>{
        let tabla = "<table class='table table-striped'><thead><tr><th>Nombre</th><th>Usuario</th><th>Email</th><th>Password</th><th>Fecha_Nacimiento</th></tr></thead><tbody>";
        data.forEach((usuarios: UsuariosDTO)=>{
          tabla += `<tr id="fila-${usuarios.id}"><td>${usuarios.nombre}</td><td>${usuarios.usuario}</td><td>${usuarios.email}</td><td>${usuarios.password}</td><td>${usuarios.fechaNacimiento}</td><td><button id="${usuarios.id}" class="btn btn-danger eliminar" ">Eliminar</button></td></tr>`;
        })
        
          
        tabla += "</tbody></table>";
        document.documentElement.innerHTML += tabla;

        const botonEliminar = document.querySelectorAll('.eliminar');
        botonEliminar.forEach(boton => {
          boton.addEventListener('click', ()=>{
            let confirmar = confirm("¿Desea seguir borrando el usuario?");
            if(confirmar){
              let fila = document.getElementById(`fila-${boton.id}`);
              fila?.remove();
              this.eliminarUsuario(boton.id);
            }

          });
        });
        }
     });
  }

  public mostrarListadoAlPulsar(){
    document.addEventListener('(click)', ()=>{
      this.mostrarListado();
    });
  }

  public eliminarUsuario(id: number | string){
    this.http.delete(`http://localhost:9999/formularios/usuarios/${id}`).subscribe(
      (response) => {
        if(response != null){
          alert('Usuario eliminado correctamente');
        }else{
          alert('Error al eliminar el usuario');
        }
      }
    );
  }

  public abrirFormularioUsuarios(){
     document.addEventListener('click', () =>{
      window.open("/formulario-usuarios");
    });
  }
}



