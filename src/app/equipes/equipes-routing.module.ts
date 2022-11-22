import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [{ path: '', component: EquipesComponent,children:[
  {path:'',component:ListEquipeComponent},
  {path:'add',component:FormEquipeComponent},
  {path:'update/:id',component:FormEquipeComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
