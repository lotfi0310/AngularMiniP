import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDetailequipesComponent } from './detailequipes/form-detailequipes/form-detailequipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDetailequipesComponent } from './detailequipes/list-detailequipes/list-detailequipes.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormDetailequipesComponent,
    ListDetailequipesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
