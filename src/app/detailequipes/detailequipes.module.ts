import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailequipesComponent } from './form-detailequipes/form-detailequipes.component';



@NgModule({
  declarations: [
    DetailequipesComponent,
  
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule,
    ReactiveFormsModule
    
    
  ]
})
export class DetailequipesModule { }
