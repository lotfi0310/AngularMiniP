import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantComponent } from './enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ConsultEnseignantComponent } from './consult-enseignant/consult-enseignant.component';
import { EnseignantRoutingModule } from './enseignant-routing.module';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    EnseignantComponent,
    AddEnseignantComponent,
    ConsultEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule
  ]
})
export class EnseignantModule { }
