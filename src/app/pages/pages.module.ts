import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';



// Modulos
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficodonasComponent } from '../components/graficodonas/graficodonas.component';
import { CommonModule } from '@angular/common';


@NgModule({
 declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficodonasComponent
 ],
 exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
 ],
 imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    CommonModule
 ]

})

export class PagesModule {
}
