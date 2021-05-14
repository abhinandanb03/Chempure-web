import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IgalleryComponent } from './igallery/igallery.component';
import { VgalleryComponent } from './vgallery/vgallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'igallery', component: IgalleryComponent},
  {path: 'vgallery', component: VgalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
