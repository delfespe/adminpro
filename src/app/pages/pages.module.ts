import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTE } from './pages.routes';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Grafica1Component 
    ],
    imports:[
        SharedModule,
        PAGES_ROUTE,
        ChartsModule,
        FormsModule
    ]
})

export class PageModules{}