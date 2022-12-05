import { Component, OnInit } from '@angular/core';
import {Universite} from "../../core/model/universite";
import {UniversiteService} from "../../core/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})
export class FormUniversiteComponent implements OnInit {
  public Univ: Universite;
  imageSrc: string;

  universite : FormGroup;
  error : boolean;
  constructor(private universiteService: UniversiteService,
              private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createUniversiteForm();
    this.loadData();
  }

 public addUniversities(){
   this.Univ=this.universite?.value;
if(this.Univ.idUniv==null){
  this.universiteService.addUniversite(this.Univ).subscribe(
    data =>{
      this.router.navigate(['universities/']);
    })
}else{
  this.universiteService.updateUniversite(this.Univ).subscribe(
    data =>{
      this.router.navigate(['universities/']);
    })
}

 }

  onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(reader.result);
      };
    }
  }


  createUniversiteForm(){

    /*this.Univ.imageUniv=this.imageSrc;*/
    this.universite=new FormGroup({
      idUniv: new FormControl(""),
      nomUniv: new FormControl("", Validators.minLength(2)),
      imageUniv : new FormControl("",Validators.required),



/*
      imageUniv : new FormControl("",Validators.required)
*/


    })
  }


  private loadData(){
    this.universiteService.univUp$.subscribe(
      data =>{
        if(data){
          this.universite.patchValue({
            idUniv:data.idUniv,
            nomUniv:data.nomUniv,
            imageUniv:data.imageUniv
          })
        }
      }
    )
  }


}
