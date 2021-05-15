import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IgalleryComponent } from './igallery/igallery.component';
import { VgalleryComponent } from './vgallery/vgallery.component';
import { ContactComponent } from './contact/contact.component';
import { ClientelleComponent } from './clientelle/clientelle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IgalleryComponent,
    VgalleryComponent,
    ContactComponent,
    ClientelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    LightboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
