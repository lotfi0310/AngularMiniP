import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { NavEtudiantComponent } from './nav-etudiant/nav-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { FormsModule } from '@angular/forms';
import { EtudiantequipesComponent } from './etudiantequipes/etudiantequipes.component';
import { EtudiantContratComponent } from './etudiant-contrat/etudiant-contrat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    EtudiantsComponent,
    ListEtudiantComponent,
    NavEtudiantComponent,
    FormEtudiantComponent,
    EtudiantequipesComponent,
    EtudiantContratComponent,
    StatisticsComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantsRoutingModule,
    Ng2SearchPipeModule

  ]
})
export class EtudiantsModule { }
