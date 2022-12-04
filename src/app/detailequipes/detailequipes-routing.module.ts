import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailEquipeComponent } from './form-detail-equipe/form-detail-equipe.component';

const routes: Routes = [{ path: '', component: DetailequipesComponent,children:[
  {path:'', component: FormDetailEquipeComponent}

] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipesRoutingModule { }
