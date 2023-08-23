import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilStarsComponent } from './components/perfil-stars/perfil-stars.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'perfil-stars', component: PerfilStarsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
