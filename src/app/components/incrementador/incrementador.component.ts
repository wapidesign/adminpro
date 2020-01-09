import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  // @ViewChild('txtProgress') txtProgress: ElementRef;
  // @ViewChild('txtProgress', {txtProgress: ElementRef})
  
  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() progreso:number = 50;
  
  @Output('actualizavalor') cambioValor:EventEmitter<number> =  new EventEmitter();
  
  // @ViewChild("txtProgress") txtProgress: ElementRef;
  @ViewChild("txtProgress", {static: false}) txtProgress: ElementRef;
  
  constructor() {
    // console.log('progreso', this.progreso);
   }

  ngOnInit() {
    // console.log('progreso', this.progreso);
  }
  
  onChanges( newValue:number ){
   
    // let elemHTML:any = document.getElementsByName('progreso')[0];
    // let elemHTML:any = 
    console.log(this.txtProgress);

    if(newValue >= 100){
      this.progreso = 100;    
    }else if(newValue <= 0){
      this.progreso = 100;
    }else{
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value =  this.progreso;

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
    this.txtProgress.nativeElement.focus();

    this.cambioValor.emit(this.progreso);
  }

}
