import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'caja',
    template: `<div [style.backgroundColor]="color"
        (mouseenter)="notificar()"></div>`,
    styles: [`
        div {
            width: 100px;
            height: 100px;        
        }
    `]
})

// Recibimos color como 
export class CajaComponent{
    @Input() color: string = 'red';

// Emitimos un evento al padre
    @Output() encima: EventEmitter<string> = new EventEmitter();

    notificar(){
        this.encima.emit(`El color de la caja es ${this.color}`)
    }
    
}
