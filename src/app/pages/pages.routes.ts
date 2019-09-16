import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from 'src/app/pages/account-settings/account-settings.component';
import { PromesasComponent } from 'src/app/pages/promesas/promesas.component';
import { RxjsComponent } from 'src/app/pages/rxjs/rxjs.component';

const pagesRoutes : Routes = [
    {
        path:'', component:PagesComponent, children:[
        {path:'dashboard', component:DashboardComponent, data: {titulo: 'Dashboard'}},
        {path:'progress', component:ProgressComponent, data: {titulo: 'Progress'}},
        {path:'graficas1', component:Grafica1Component, data: {titulo: 'Graficas'}},
        {path:'account-settings', component:AccountSettingsComponent, data: {titulo: 'COnfiguracion Tema'}},
        {path:'promesas', component:PromesasComponent, data: {titulo: 'Promesas'}},
        {path:'rxjs', component:RxjsComponent, data: {titulo: 'Observable'}},
        {path:'', redirectTo:'/dashboard', pathMatch:'full'},
        ]
    }
];

export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);