import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  title : string = 'Registro de Personas';
  model={
    nombre:"",
    dni:"",
    estado_civil:""
  }
  constructor(){

  } 

  ngOnInit(): void {
    
  }
  valoresingresados=""

 enviar(values:any):void{
  console.log('from.values:',values);
  this.valoresingresados=values;
  

}
}
