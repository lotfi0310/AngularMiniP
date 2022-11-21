import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';


@NgModule({
  declarations: [
    EquipesComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule
  ]
})
export class EquipesModule { }
