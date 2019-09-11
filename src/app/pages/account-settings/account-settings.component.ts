import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(  public _ajustes: SettingsService) { }

  ngOnInit() {
  }
  cambiaColor(tema: string, link: any) {
    console.log(tema);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }
  aplicarCheck(link: any) {
    let selectors: any = document.getElementById('themecolors').getElementsByClassName('selector');
    console.log(selectors);
    for (let sel of selectors) {
      if (sel) {
        sel.classList.remove('working');
      }
    }
    link.classList.add('working');
  }
}
