import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FlyerComponent } from './flyer/flyer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LinkProductoComponent } from './link-producto/link-producto.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosModule } from './productos/productos.module';

@NgModule({
  declarations: [
    ProductosComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    FlyerComponent,
    NosotrosComponent,
    LinkProductoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductosModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
