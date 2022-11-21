import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailequipesComponent } from './detailequipes.component';

const routes: Routes = [{ path: '', component: DetailequipesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipesRoutingModule { }
