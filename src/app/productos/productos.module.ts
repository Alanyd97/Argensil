import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ExterioresComponent } from '../exteriores/exteriores.component';
import { InterioresComponent } from '../interiores/interiores.component';
import { LubricantesComponent } from '../lubricantes/lubricantes.component';
import { AromasComponent } from '../aromas/aromas.component';


@NgModule({
  declarations: [
    ExterioresComponent,
    InterioresComponent,
    LubricantesComponent,
    AromasComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
