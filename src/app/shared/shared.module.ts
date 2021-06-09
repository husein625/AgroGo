import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    RouterModule,


    
  ],
  exports : [HeaderComponent]
})
export class SharedModule { }
