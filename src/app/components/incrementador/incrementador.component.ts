import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress',null) txtProgress: ElementRef;
  @Input('nombre') leyenda: string = "Leyenda";
  @Input() progreso: number = 50;
  @Output() cambio: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onChanges(valor: number) {
    //let elemHtml:any = document.getElementsByName("progreso")[0];

    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0
    } else {
      this.progreso = Number(valor);
    }
    //elemHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambio.emit(this.progreso);
  }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambio.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
