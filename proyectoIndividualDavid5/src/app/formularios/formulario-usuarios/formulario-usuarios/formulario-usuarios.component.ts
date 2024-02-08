import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {

  usuarios = new FormGroup({
    usuario: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient){}

  public modificarUsuario(){
    this.http.put(`http://localhost:9999/formularios/usuarios?email=${this.usuarios.value.email}`,{
      usuario: this.usuarios.value.usuario
    }).subscribe({
      next: (response) =>{
        if(response!=null){
          alert('Usuario modificado correctamente')
        }else{
          alert('Error al modificar el usuario')
        }
      } 
    });
  }

  public cancelarUsuario(){
    this.usuarios.reset();
  }

}
