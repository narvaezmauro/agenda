import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }                 from './app.component';
import { CajaComponent }                from './ejemplos/caja.component';
import { EjemplosBindingComponent }     from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent }      from './lista-contactos/lista-contactos.component';
import { ContactosService }             from './servicios/contactos.service';
import { DetallesContactoComponent }    from './detalles-contacto/detalles-contacto.component';
import { EjemplosInyeccionComponent,
   Servicio1, Servicio2Provider }       from './ejemplos/ejemplos-inyeccion.componentes';
import { FormularioContactoComponent }  from './formulario-contacto/formulario-contacto.component';
import { MisContactosComponent}         from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent }       from './nuevo-contacto/nuevo-contacto.component';
import { AppRoutingModule }             from './app-routing.module';
import { ContactosResolve } from './servicios/contactos-resolve.service';
import { Direcciones, ProveedorDirecciones } from './configuracion/direcciones';
import { EjemplosObservablesComponent, EjemplosObservablesWikipediaComponent } from './ejemplos/ejemplos-observables.component';
import { Observable } from 'rxjs/Observable';
import { EjemplosPipeComponent } from './ejemplos/ejemplos-pipe.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { EjemplosDirectivasAtributoDirective } from './ejemplos/ejemplos-directivas.directive';
import { EjemplosDirectivasComponent } from './ejemplos/ejemplos-directivas.component';



@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    AppRoutingModule,
     ],
  declarations: [ // metemos todos los componenetes, directivas y pipes
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent, 
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent,
    FormularioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    EjemplosObservablesComponent,
    EjemplosObservablesWikipediaComponent,
    EjemplosPipeComponent,
    OrdenarPipe,
    EjemplosDirectivasAtributoDirective,
    EjemplosDirectivasComponent,
     ],
  providers: [ // metemos los servicios
    ContactosService,   
    Servicio1, // este tiene @Injectable
    Servicio2Provider, 
    ContactosResolve,
    ProveedorDirecciones
     ],
  bootstrap: [ // componente raiz de nuestra app
    AppComponent ]
})
export class AppModule { }
