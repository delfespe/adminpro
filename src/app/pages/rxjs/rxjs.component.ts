import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription : Subscription;

  constructor() {

    this.suscription = this.regresaObservable().pipe( )
    .subscribe(
      numero => { console.log("Subs: ", numero); },
      error => console.log("Error", error),
      () => console.log("Obser fin")
    )

  }

 
  ngOnInit() {
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {valor: contador};

        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   //clearInterval(intervalo);
        //   //observer.error("..help");
        // }
      }, 1000);
    }
    ).pipe(
      map( resp =>{ return resp.valor }),
      filter( (valor, index) => {
        if ((valor % 2) === 1){
          return true;
        } else {
          return false;
        }
      })
    )
  }
}
