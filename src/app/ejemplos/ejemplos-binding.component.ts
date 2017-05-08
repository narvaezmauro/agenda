import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-binding',
    templateUrl: 'app/ejemplos/ejemplos-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    } 
  `]

})

export class EjemplosBindingComponent{
    alumnos: string = 'Babel';

    numeroDeLaSuerte: number = 43;

    // binding de propiedades
    textAreaLineas: number = 6;

    // binding de la clase
    pintamosClase: boolean = true;
    clases: any = {uno: true, dos: true};

    mensaje: string = 'cambiame';

    // binding de estilos
    obtenerColor(): string{
      return 'green';
    }
    
    obtenerEstilos(): any{
      return{
        backgroundColor: 'red',
        color: 'white'
      }
    }

    mostrarMensaje(): void{
      alert('Hola señores');
    }
}