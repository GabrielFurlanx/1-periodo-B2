import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

 variavel_lista = [];
 texto : string = "";

 adiciona() {
  if (!(this.texto == "")) {

  } else {
    this.variavel_lista.push(this.texto)
    this.texto = "";
  }
 }

}
