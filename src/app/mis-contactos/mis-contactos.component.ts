import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';


@Component({
    templateUrl: './mis-contactos.component.html'
   
})

export class MisContactosComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    constructor(private _contactosService: ContactosService) {}
 
    ngOnInit(): void{

        this._contactosService.obtenerContactos()
                              .subscribe(contactos => {
                                  this.listaContactos=contactos;
                              });
    }

    mostrarDetalles(contacto: Contacto): void{
        this.contactoSeleccionado = contacto;
    } 

    navegarRuta(ruta: string){
        window.open(ruta, '_blank');
    } 


}