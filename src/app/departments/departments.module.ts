import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ConsultDepartmentComponent } from './consult-department/consult-department.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DepartmentsComponent,
    AddDepartmentComponent,
    ConsultDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule

  ]
})
export class DepartmentsModule { }
