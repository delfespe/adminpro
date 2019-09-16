import { Component, OnInit } from '@angular/core';
import { Promise, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      (mensaje) => console.log("Termino.." + mensaje)
    ).catch(error => console.log("Error: " + error))
  }

  ngOnInit() {
  }

  contarTres():Promise<boolean> {
    return Promise((resolve, reject) => {
      let contador = 0

      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true);
          //reject("..el fin");
          clearInterval(intervalo);
        }

      }, 1000);
    });
  }
}
