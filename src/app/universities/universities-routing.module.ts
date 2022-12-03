import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities.component';
import {ListUniversiteComponent} from "./list-universite/list-universite.component";
import {FormUniversiteComponent} from "./form-universite/form-universite.component";

const routes: Routes = [{ path: '', component: UniversitiesComponent, children :[
    {path:'',component:ListUniversiteComponent},
    {path:'add',component:FormUniversiteComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitiesRoutingModule { }
