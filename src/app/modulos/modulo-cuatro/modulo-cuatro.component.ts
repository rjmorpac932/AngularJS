import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-cuatro',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-cuatro.component.html',
  styleUrl: '../modulo.css'
})

export class ModuloCuatroComponent {

  /* NO INDENTAR */
cAppComponent =
`<app-home></app-home>
<router-outlet>`;

cAppComponentImports =
`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ejemploRuta';
}`;

cRoutesExample = 
`import { Routes } from '@angular/router';
import { ListaIntegrantesComponent } from './integrantes/lista-integrantes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
    {path: "integrantes", title:"Integrantes", component: ListaIntegrantesComponent},
    {path: "sobre-nosotros", title:"Sobre Nosotros", component: SobreNosotrosComponent},
    {path:"", pathMatch:"full", redirectTo:"/integrantes"},
    {path:"**", redirectTo:"/integrantes"}
];`;

cHomeHTML =
`// src/app/home/home.component.html
<h1>Bienvenidos a Angular 17</h1>
<h2>Vamos a ver cómo funcionan las rutas en Angular 17</h2>
<div>
  <a routerLink="/integrantes"> Integrantes</a>
</div>
<div>
  <a routerLink="/sobre-nosotros">Sobre Nosotros<a/>
</div>`;

cHomeTS = 
`// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
}`;

cSobreNosotrosTS =
`// src/app/sobre-nosotros/sobre-nosotros.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})

export class SobreNosotrosComponent {
}`;

cSobreNosotrosHTML =
`<h1>Sobre Nosotros:</h1>
<p>
  Somos un grupo de 5 alumnos del instituto IES AL-MUDEYNE
  y estamos realizando un trabajo sobre Angular 17. 
  En este trabajo explicamos desde cero y con documentación
  cómo funciona Angular 17
</p>
<h2>Descubre más info sobre el instituto y Angular en los siguientes enlaces:</h2>
<div>
  <a routerLink="info-instituto">IES Al-mudeyne</a>
</div>
<div>
  <a routerLink="info-angular">Angular JS</a>
</div>
<h3>¡Espero que te guste!</h3>`;

cRoutesExample2 = 
`import { Routes } from '@angular/router';
import { ListaIntegrantesComponent } from './integrantes/lista-integrantes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { InfoAngularComponent } from './info-angular/info-angular.component';
import { InfoInstitutoComponent } from './info-instituto/info-instituto.component';

export const routes: Routes = [
    {path: "integrantes", title:"Integrantes", component: ListaIntegrantesComponent},
    {path: "sobre-nosotros", title:"Sobre Nosotros", component: SobreNosotrosComponent, children: [
      {path: 'info-angular', component: InfoAngularComponent},
      {path: 'info-instituto', component: InfoInstitutoComponent}
    ]},
    {path:"", pathMatch:"full", redirectTo:"/integrantes"},
    {path:"**", redirectTo:"/integrantes"}
];`;

cEjemploRouterLink1 = `<a routerLink=”/grupo/a/usuarios/alberto” routerLinkActive=”active-link”>...</a>`;
cEjemploRouterLink2 = `<a  [routerLink]=[“/grupo”, grupoId, “usuarios”, usuarioNombre]>...</a>`;

cRoutesExample3 = 
`const appRoutes: Routes = [
  { path: “inicio”, component: <ComponenteAMostrar> },
  { path: “**”, component: <ComponenteNoEncontrado> }
];`;
cRoutesExample4 =
`const appRoutes: Routes = [
  { path: “libro/:id”, component: <ComponenteAMostrar> },
  { … },
];`;
cRoutesExample5 = 
`import { Routes } from ‘@angular/routes’;
import { HolaMundoComponet } from ‘./Componentes/hola-mundo.component’;

export const appRoutes: Routes = [...];`;
  /***************/

}
