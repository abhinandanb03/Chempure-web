import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IgalleryComponent } from './igallery/igallery.component';
import { VgalleryComponent } from './vgallery/vgallery.component';
import { ContactComponent } from './contact/contact.component';
import { ClientelleComponent } from './clientelle/clientelle.component';
import { ProfileComponent } from './profile/profile.component';
import { StrengthComponent } from './strength/strength.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'igallery', component: IgalleryComponent},
  {path: 'vgallery', component: VgalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'client', component: ClientelleComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'strength', component: StrengthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
