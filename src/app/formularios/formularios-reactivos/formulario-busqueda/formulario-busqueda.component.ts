import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-busqueda',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-busqueda.component.html',
  styleUrl: '../../formulario.css'
})
export class FormularioBusquedaComponent {

  usuario: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.usuario = this.formBuilder.group({
      nombre : new FormControl(),
      username: new FormControl()
    })
  }
  listaUsuarios = [
  {nombre: "Antonio", apellido1: "León", apellido2: "Fernández", username: "aleofer"},
  {nombre: "Juan", apellido1: "Martín", apellido2: "Candela", username: "jmarcan"},
  {nombre: "David", apellido1: "Dorante", apellido2: "Lucas", username: "ddorluc"},
  {nombre: "Jose Maria", apellido1: "Mañero", apellido2: "Brenes", username: "jmanbre"},
  {nombre: "Alvaro", apellido1: "Sanchez", apellido2: "Moreno", username: "asanmor"},
  {nombre: "Alvaro", apellido1: "López", apellido2: "García", username: "alopgar"},
  {nombre: "Antonio", apellido1: "Pérez", apellido2: "González", username: "apergon"},
  {nombre: "Juan", apellido1: "López", apellido2: "Morón", username: "jlopmor"},
  {nombre: "Alvaro", apellido1: "Sinner", apellido2: "Teruel", username: "asinter"},
  {nombre: "Antonio", apellido1: "Dominguez", apellido2: "Páez", username: "adompae"},
  {nombre: "Jose Maria", apellido1: "Begines", apellido2: "Tur", username: "jbegtur"},
  ];
  usuariosEncontrados: any[] =[];
  enviarDatos() {
    const nombreBuscado = this.usuario.value.nombre?.toLowerCase();
    const usernameBuscado = this.usuario.value.username?.toLowerCase();

  if (nombreBuscado !== undefined || usernameBuscado !== undefined) { // Verificar si al menos uno de los campos no está vacío
      this.usuariosEncontrados = this.listaUsuarios.filter(usuario =>
      (nombreBuscado === undefined || usuario.nombre.toLowerCase().includes(nombreBuscado)) && // Verificar si el campo nombre está vacío o si el nombre del usuario incluye el nombre buscado
      (usernameBuscado === undefined || usuario.username.toLowerCase().includes(usernameBuscado)) // Verificar si el campo username está vacío o si el username del usuario incluye el username buscado
    );
  } else if (this.usuariosEncontrados.length === 0){ // Si no se encontraron usuarios y ambos campos están vacíos, mostrar todos los usuarios
    this.usuariosEncontrados = this.listaUsuarios;
  }
}
}