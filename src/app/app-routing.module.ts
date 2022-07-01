import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';

const routes: Routes = [
  {
    path: '', redirectTo :'/characters', pathMatch : 'full'
  }
  ,
  {
    path: 'characters', component:  CharactersComponent
  }
  ,
  {
    path: 'episodes', component:  EpisodesComponent
  }
  ,
  {
    path: 'locations', component:  LocationsComponent
  }
  ,
  {
    path: '**', redirectTo: '/characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
