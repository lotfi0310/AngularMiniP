import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesRoutingModule } from './universities-routing.module';
import { UniversitiesComponent } from './universities.component';
import {AppModule} from "../app.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ListUniversiteComponent} from "./list-universite/list-universite.component";
import {FormUniversiteComponent} from "./form-universite/form-universite.component";
import {NavUniversiteComponent} from "./nav-universite/nav-universite.component";
import { UniversityDetailComponent } from './list-universite/university-detail/university-detail.component';
import { AddDepComponent } from './add-dep/add-dep.component';


@NgModule({
  declarations: [
    UniversitiesComponent,
    ListUniversiteComponent,
    NavUniversiteComponent,
    FormUniversiteComponent,
    UniversityDetailComponent,
    AddDepComponent
  ],

    imports: [
        CommonModule,
        UniversitiesRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ]
})
export class UniversitiesModule { }
