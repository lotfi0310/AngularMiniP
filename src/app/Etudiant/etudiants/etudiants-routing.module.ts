import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantContratComponent } from './etudiant-contrat/etudiant-contrat.component';
import { EtudiantequipesComponent } from './etudiantequipes/etudiantequipes.component';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { NavEtudiantComponent } from './nav-etudiant/nav-etudiant.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [{ path: '', component: EtudiantsComponent,children:[
  {path:'',component:ListEtudiantComponent}, 
  {path:'add',component:FormEtudiantComponent},
  {path:'update/:idEtudiant',component:FormEtudiantComponent},
  {path:'etudiantequipes/:idEtudiant',component:EtudiantequipesComponent},
  {path:'etudiant-contrat/:idEtudiant',component:EtudiantContratComponent},
  {path:'statistics.component',component:StatisticsComponent}

] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
