import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //Datos recogidos del formulario
  a:string = ""
  b:string = ""
  resultado:number = 0

  public sumar():number{
    this.resultado = parseInt(this.a) + parseInt(this.b)
    return this.resultado
  }

  public restar():number{
    this.resultado = parseInt(this.a) - parseInt(this.b)
    return this.resultado
  }

  public multiplicar():number{
    this.resultado = parseInt(this.a) * parseInt(this.b)
    return this.resultado
  }

  public dividir():number{
    this.resultado = parseInt(this.a) / parseInt(this.b)
    return this.resultado
  }

  ngOnInit() {
  }

}
