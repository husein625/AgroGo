import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphsComponent } from './graphs/graphs.component';
import { EndemicSpeciesComponent } from './plant/endemic-species/endemic-species.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantMapComponent } from './plant/plant-map/plant-map.component';
import { PlantComponent } from './plant/plant.component';

const routes: Routes = [
  { path: '', redirectTo: '/plant/plant-map', pathMatch: 'full' },

  {path: 'plant', component: PlantComponent, children: [
    {path: 'plant-map', component: PlantMapComponent},
    {path: 'plant-list', component: PlantListComponent},

    {path: 'endemic-species', component: EndemicSpeciesComponent},
  ]},
  {path: 'graphs/:name', component: GraphsComponent,}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
