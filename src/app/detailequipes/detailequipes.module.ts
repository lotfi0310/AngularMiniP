import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailequipesComponent } from './form-detailequipes/form-detailequipes.component';
import { ListDetailequipesComponent } from './list-detailequipes/list-detailequipes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    DetailequipesComponent,
    FormDetailequipesComponent,
    ListDetailequipesComponent
  
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,

  ]
})
export class DetailequipesModule { }
