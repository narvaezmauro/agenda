import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';


@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
     BrowserModule,
     FormsModule ],
  declarations: [ // metemos todos los componenetes, directivas y pipes
     AppComponent,
     CajaComponent,
     EjemplosBindingComponent,
     EjemplosComponentesComponent, 
     ],
     providers: [ // metemos los servicios

     ],
  bootstrap: [ // componente raiz de nuestra app
     AppComponent ]
})
export class AppModule { }
