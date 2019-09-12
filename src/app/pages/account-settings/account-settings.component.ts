import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(  public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiaColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectors: any = document.getElementById('themecolors').getElementsByClassName('selector');
    for (let sel of selectors) {
      if (sel) {
        sel.classList.remove('working');
      }
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectors: any = document.getElementById('themecolors').getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for (let sel of selectors) {
      if(sel.getAttribute("data-theme") === tema){
        sel.classList.add("working");
        break;
      }
    }    
  }
}
