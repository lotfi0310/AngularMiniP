import { Component, OnInit } from '@angular/core';
import { detailequipes } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-detailequipes',
  templateUrl: './form-detailequipes.component.html',
  styleUrls: ['./form-detailequipes.component.css']
})
export class FormDetailequipesComponent implements OnInit {
  public detailequipe : detailequipes;
  detailequipes: FormGroup;
  error:boolean
  constructor(private detailequipeservice: DetailequipeService, private router:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
this.createDetaiequipesForm();
this.loadData();
  }
  public addDetailEquipes(){
    this.detailequipe=this.detailequipes?.value;
 if(this.detailequipe.idDetailEquipe==null){
   this.detailequipeservice.addDetailequipe(this.detailequipe).subscribe(
     data =>{
       this.router.navigate(['detailequipes/']);
     })
 }else{
 
 }
 
  }

  createDetaiequipesForm(){
    this.detailequipes=new FormGroup({
      idDetailEquipe: new FormControl(""),
      salle: new FormControl("", Validators.minLength(2)),
      thematique : new FormControl("",Validators.required)
    })
  }

  private loadData(){
    this.detailequipeservice.detailequipeUp$.subscribe(
      data =>{
        if(data){
          this.detailequipes.patchValue({
            idDetailequipe:data.idDetailEquipe,
            salle:data.salle,
            thematique:data.thematique
          })
        }
      }
    )
  }
}
