import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[EjemploDirectivasAtributo]' })
export class EjemplosDirectivasAtributoDirective {

    // Con Render establecemos los atributos del elemento
    // en el cual está situada la directiva

    // El elemento en cuestión lo obtenemos con:
    // ElementRef.nativeElement
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer
    ) { }


    @HostListener('mouseenter')
    ponerEstilo(){
        this.cambiarEstilo(true);
    }

    @HostListener('mouseleave')
    quitarEstilo(){
        this.cambiarEstilo(false);
    }

    cambiarEstilo(activo: boolean){
        console.log('estoy encima');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'font-weight', activo ? 'bold' : 'normal');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', activo ? 'red' : 'white');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'color', activo ? 'white' : 'black');
    }


}