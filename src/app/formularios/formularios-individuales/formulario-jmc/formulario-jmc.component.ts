import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';
@Component({
  selector: 'app-formulario-jmc',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-jmc.component.html',
  styleUrl: '../../formulario.css'
})

export class FormularioJMCComponent {

  formularioRegistro: FormGroup;
  formularioPartida: FormGroup;
  isPartidaActiva = false;

  partidaActiva = {
    idUsuario1 : 0,
    idUsuario2: 0,
    nombreUsuario1: "",
    nombreUsuario2: "",
    contador1: 0,
    contador2: 0
  }

  protected tipoFormulario = {
    REGISTRO: "REGISTRO",
    PARTIDA: "PARTIDA"
  }

  protected formularioSelected = this.tipoFormulario.REGISTRO;
  constructor(formBuilder: FormBuilder) {

    this.formularioRegistro = formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(6)]],
      usuario: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      email: ["", [Validators.required, CustomValidators.emailMatch]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    }, { validators: [CustomValidators.passwordMatch("password", "confirmPassword")] });

    this.formularioPartida = formBuilder.group({
      usuario1: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      usuario2: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      password1: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      password2: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });

  }

  isAllRegisterFormValidated() {

    let resultado = false;

    if (this.formularioRegistro.get("nombre")?.errors == null &&
      this.formularioRegistro.get("usuario")?.errors == null &&
      this.formularioRegistro.get("password")?.errors == null &&
      this.formularioRegistro.get("email")?.errors == null &&
      this.formularioRegistro.get("confirmPassword")?.errors == null &&
      this.formularioRegistro.errors == null) {

      resultado = true;
    }

    return resultado;
  }

  cambiarFormulario(formulario: string) {

    switch (formulario) {

      case this.tipoFormulario.REGISTRO:
        this.switchNavSelected(this.tipoFormulario.REGISTRO);
        this.formularioSelected = this.tipoFormulario.REGISTRO;
        break;
      case this.tipoFormulario.PARTIDA:
        this.switchNavSelected(this.tipoFormulario.PARTIDA);
        this.formularioSelected = this.tipoFormulario.PARTIDA;
        break;
    }

  }

  switchNavSelected(elementoId: string) {
    document.querySelectorAll("#nav-formulario-jmc li").forEach(elementoDOM => {
      elementoDOM.classList.remove("selected");
    });
    document.querySelector("#" + elementoId)?.classList.add("selected");
  }

  async registrarUsuario() {

    if (this.isAllRegisterFormValidated()) {

      try {

        const peticion = {

          nombreCompleto: this.formularioRegistro.get("nombre")?.value,
          nombreUsuario: this.formularioRegistro.get("usuario")?.value,
          email: this.formularioRegistro.get("email")?.value,
          password: this.formularioRegistro.get("password")?.value

        }

        await this.registrarUsuarioRequest(peticion);
        alert("Usuario registrado con éxito");
        this.formularioRegistro.reset();
        
      } catch (error) {

        alert("No se ha producido el registro de manera correcta");

      }

    } else {
      alert("Debes rellenar todos los campos de manera correcta");
    }

  }

  async registrarUsuarioRequest(peticion: Object) {
    const URL = "http://localhost:9999/usuarios";
    const configuracion = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(peticion)
    }
    const respuesta = await fetch(URL, configuracion).then(respuesta => respuesta.json());
    return respuesta;
  }

  isAllPartidaFormValidated(){

    let resultado = false;

    if (this.formularioPartida.get("usuario1")?.errors == null &&
      this.formularioPartida.get("password1")?.errors == null &&
      this.formularioPartida.get("usuario2")?.errors == null &&
      this.formularioPartida.get("password2")?.errors == null &&
      this.formularioPartida.errors == null) {

      resultado = true;

    }

    return resultado;

  }

  async comenzarPartida() {

    if (this.isAllPartidaFormValidated()) {

      try {

        const partida = {

          nombreUsuario1: this.formularioPartida.get("usuario1")?.value,
          nombreUsuario2: this.formularioPartida.get("usuario2")?.value,
          password1: this.formularioPartida.get("password1")?.value,
          password2: this.formularioPartida.get("password2")?.value

        }

        const respuesta = await this.buscarPartidaRequest(partida);
        const {usuario1, usuario2, contador1, contador2}: any = respuesta;
        this.partidaActiva.nombreUsuario1 = partida.nombreUsuario1;
        this.partidaActiva.nombreUsuario2 = partida.nombreUsuario2;
        this.partidaActiva.contador1 = parseInt(contador1);
        this.partidaActiva.contador2 = parseInt(contador2);
        this.partidaActiva.idUsuario1 = usuario1.id;
        this.partidaActiva.idUsuario2 = usuario2.id;
        this.formularioPartida.reset();
        this.isPartidaActiva = true;
        
      } catch (error) {

        alert("No se ha iniciado la partida de manera correcta");

      }

    } else {
      alert("Debes rellenar todos los campos de manera correcta");
    }

  }

  async buscarPartidaRequest(partida: Object){
    const {nombreUsuario1, password1, nombreUsuario2, password2}: any = partida;
    const URL = `http://localhost:9999/partidas?nombreUsuario1=${nombreUsuario1}&password1=${password1}&nombreUsuario2=${nombreUsuario2}&password2=${password2}`;
    const respuesta = await fetch(URL).then(respuesta => respuesta.json());
    return respuesta;
  }

  async guardarPartida(){

    const URL = "http://localhost:9999/partidas";
    const configuracion = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(this.partidaActiva)
    }
    const respuesta = await fetch(URL,configuracion).then(respuesta => respuesta.json());
    alert("Partida Guardada");
    return respuesta;

  }

  salirPartida(){
    if(confirm("Estas seguro de salir de la partida (Se borrarán los cambios no guardados)")){
      this.isPartidaActiva = false;
    }
  }

}