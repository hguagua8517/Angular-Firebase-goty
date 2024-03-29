import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraHorizontalComponent } from './grafica-barra-horizontal/grafica-barra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ]
})
export class ComponentsModule { }
