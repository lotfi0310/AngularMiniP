import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailequipesComponent } from './form-detailequipes/form-detailequipes.component';
import { ListDetailequipesComponent } from './list-detailequipes/list-detailequipes.component';
const routes: Routes = [{ path: '', component: DetailequipesComponent,children:[ 
  {path:'form',component:FormDetailequipesComponent},
  {path:'list',component:ListDetailequipesComponent}
] }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipesRoutingModule { }
