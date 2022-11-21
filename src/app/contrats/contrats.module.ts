import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';


@NgModule({
  declarations: [
    ContratsComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule
  ]
})
export class ContratsModule { }
