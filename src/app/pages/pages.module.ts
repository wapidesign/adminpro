  

import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from './pages.routes';

import { SharesModule } from '../shared/shared.module';

import{ FormsModule} from "@angular/forms";

import { PagesComponent } from './pages.component';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//temproal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaDonaComponent
        
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
        
    ],
    imports:[
        SharesModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})

export class PagesModule{}