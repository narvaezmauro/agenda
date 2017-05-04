import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CajaComponent } from './caja.component';

@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
     BrowserModule,
     FormsModule ],
  declarations: [ // metemos todos los componenetes, directivas y pipes
     AppComponent,
     CajaComponent 
     ],
     providers: [ // metemos los servicios

     ],
  bootstrap: [ // componente raiz de nuestra app
     AppComponent ]
})
export class AppModule { }
