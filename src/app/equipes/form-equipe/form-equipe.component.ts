import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as internal from 'stream';
import { etudiants } from 'src/app/core/model/etudiants';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
    public listS: etudiants[];
    private equipeService: EquipeService;
    public equipe: Equipe;
    public etudiants: etudiants;
    public action: string;
    public id : number;
  constructor(private equipeservice: EquipeService,
    private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null){
      //update
      
      this.action="update";
      this.equipeservice.getEquipeById(this.id).subscribe(
        (object : Equipe)=> this.equipe=object
      )
        console.log(this.equipe)
        console.log(this.id)
      }else
      { this.action="add";
        this.equipe = new Equipe();
      }
      this.equipeservice.getStudEquipe(this.id).subscribe(
        (X:etudiants[])=>{
          this.listS = X;
        }
      )
        
    }

  saveEquipe(){
    if(this.action=='add')
    {
    //this.productService.list.push(this.product);
    this.equipeservice.addEquipe(this.equipe).subscribe(
     ()=>{ this.router.navigate(['/equipes'])}
    )
    }
    else {
      this.equipe.idEquipe=this.id;
      this.equipeservice.UpdateEquipe(this.equipe).subscribe(
       ()=>{ this.router.navigate(['/equipes'])}
      )
    }
  }
  deleteEquipe(){
    this.equipeservice.DeleteEquipe(this.id).subscribe(
      ()=>{ this.router.navigate(['/equipes'])}
    )
  }
}

