import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailequipesComponent
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule,
    FormsModule,
    DetailequipesRoutingModule

  ]
})
export class DetailequipesModule { }
