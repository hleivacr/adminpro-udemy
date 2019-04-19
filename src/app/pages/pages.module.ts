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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
 declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficodonasComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
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
