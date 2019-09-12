import { Injectable, Inject } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public ajustes: Ajustes = { temaUrl: 'assets/css/colors/default.cs', tema: 'default' };

  constructor(@Inject(DOCUMENT) private _document,) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('guardando en el local storage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
      console.log('cargando tema del local storage');
    } else {
      this.aplicarTema(this.ajustes.tema);
      console.log('cargando tema por defecto');
    }
  }

  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}