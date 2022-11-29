import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-etudiantequipes',
  templateUrl: './etudiantequipes.component.html',
  styleUrls: ['./etudiantequipes.component.css']
})
export class EtudiantequipesComponent implements OnInit {
 id:number;
 etudiant: etudiants;
  constructor(private currentroute:ActivatedRoute,private serviceetudiant:EtudiantService) { 
   

  }

  ngOnInit(): void {
    this.id= this.currentroute.snapshot.params['idEtudiant'];
 this.serviceetudiant.geEtudiantById(this.id).subscribe(
  (data)=>{
    this.etudiant=data;
  }
 )

  }

}
