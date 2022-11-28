import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { NavEquipeComponent } from './nav-equipe/nav-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EquipesComponent,
    ListEquipeComponent,
    NavEquipeComponent,
    FormEquipeComponent,
    DetailEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class EquipesModule { }
