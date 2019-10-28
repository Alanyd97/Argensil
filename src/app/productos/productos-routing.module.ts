import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LubricantesComponent } from '../lubricantes/lubricantes.component';
import { AromasComponent } from '../aromas/aromas.component';
import { ExterioresComponent } from '../exteriores/exteriores.component';
import { InterioresComponent } from '../interiores/interiores.component';
import { ProductosComponent } from './productos.component';


const routes: Routes = [
  { path: 'productos', component: ProductosComponent, children: [
    {path: '', component:ExterioresComponent},
    { path: 'Lubricantes', component: LubricantesComponent },
    { path: 'Aromas', component: AromasComponent },
    { path: 'Exteriores', component: ExterioresComponent },
    { path: 'Interiores', component: InterioresComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
