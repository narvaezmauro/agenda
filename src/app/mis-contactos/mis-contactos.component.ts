import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './mis-contactos.component.html'
   
})

export class MisContactosComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    constructor(
        private _contactosService: ContactosService,
        private _activatedRoute: ActivatedRoute
    ) {}
 
    ngOnInit(): void{

        // this._contactosService.obtenerContactos()
        //                       .subscribe(contactos => {
        //                           this.listaContactos=contactos;
        //                       });

        this._activatedRoute.data.forEach((data: any)=>{
        // this._activatedRoute.data.forEach((data: {contactos: Contacto[]})=>{
            
            this.listaContactos = data.contactos;
        });
    }

    mostrarDetalles(contacto: Contacto): void{
        this.contactoSeleccionado = contacto;
    } 

    navegarRuta(ruta: string){
        window.open(ruta, '_blank');
    } 


}