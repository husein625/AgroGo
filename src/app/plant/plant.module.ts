import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';
import { PlantMapComponent } from './plant-map/plant-map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { PlantListComponent } from './plant-list/plant-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PlantModalComponent } from './plant-map/plant-modal/plant-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EndemicSpeciesComponent } from './endemic-species/endemic-species.component';


@NgModule({
  declarations: [PlantComponent,PlantMapComponent, PlantListComponent, PlantModalComponent, EndemicSpeciesComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDVUCggbTi2bJSDzxor3LfLHktV-i16Zzg'}),
    //PlantRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    MatFormFieldModule,    
    MatButtonToggleModule,


    

  ]
})
export class PlantModule { }
