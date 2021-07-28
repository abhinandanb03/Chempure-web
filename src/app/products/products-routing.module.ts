import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { WasteComponent } from './waste/waste.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { ServicesComponent } from './services/services.component';
import { SwasteComponent } from './swaste/swaste.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent, 
        children: [
            {
                path: 'waste',
                component: WasteComponent
            },
            {
                path: 'chemicals',
                component: ChemicalsComponent
            },
            {
                path: 'services',
                component: ServicesComponent
            },
            {
                path: 'swaste',
                component: SwasteComponent
            },
        ]
    },
    
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }