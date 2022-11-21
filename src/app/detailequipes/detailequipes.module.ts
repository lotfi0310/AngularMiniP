import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';


@NgModule({
  declarations: [
    DetailequipesComponent
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule
  ]
})
export class DetailequipesModule { }
