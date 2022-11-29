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

@NgModule({
  declarations: [
    EtudiantsComponent,
    ListEtudiantComponent,
    NavEtudiantComponent,
    FormEtudiantComponent,
    EtudiantequipesComponent,
    EtudiantContratComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
