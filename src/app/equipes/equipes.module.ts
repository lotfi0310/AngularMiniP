import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';


@NgModule({
  declarations: [
    EquipesComponent,
    ListEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule
  ]
})
export class EquipesModule { }
