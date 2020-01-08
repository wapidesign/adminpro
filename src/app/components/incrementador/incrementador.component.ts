import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() progreso:number = 50;

  @Output('actualizavalor') cambioValor:EventEmitter<number> =  new EventEmitter();

  constructor() {
    // console.log('progreso', this.progreso);
   }

  ngOnInit() {
    // console.log('progreso', this.progreso);
  }
  
  onChanges( newValue:number ){

    console.log(newValue);

    let elemHTML:any = document.getElementsByName('progreso')[0];

    if(newValue >= 100){
      this.progreso = 100;    
    }else if(newValue <= 0){
      this.progreso = 100;
    }else{
      this.progreso = newValue;
    }

    elemHTML.value =  this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor){

    if(this.progreso >= 100 && valor > 0){
      return
    }

    if(this.progreso <= 0 && valor < 0){
      return
    }

    this.progreso =  this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
