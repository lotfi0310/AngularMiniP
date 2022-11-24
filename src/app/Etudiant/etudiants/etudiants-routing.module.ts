import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { NavEtudiantComponent } from './nav-etudiant/nav-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantsComponent,children:[
  {path:'',component:ListEtudiantComponent}, 
  {path:'add',component:FormEtudiantComponent},
  {path:'update/:idEtudiant',component:FormEtudiantComponent}
] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
