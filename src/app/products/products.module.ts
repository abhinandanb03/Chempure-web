import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { WasteComponent } from './waste/waste.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { ServicesComponent } from './services/services.component';
import { SwasteComponent } from './swaste/swaste.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    WasteComponent,
    ChemicalsComponent,
    ServicesComponent,
    SwasteComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
