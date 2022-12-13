import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailequipesComponent } from './form-detailequipes/form-detailequipes.component';
import { ListDetailequipesComponent } from './list-detailequipes/list-detailequipes.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
const routes: Routes = [{
  path: '', component: DetailequipesComponent, children: [
    { path: '', component: ListDetailequipesComponent },
    { path: 'form', component: FormDetailequipesComponent },
    { path: 'edit/:id', component: UpdateDetailsComponent },
    { path: 'contact', component: ContactComponent}
  ]
}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipesRoutingModule { }
