import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})

export class ListEtudiantComponent implements OnInit {
  public listetudiants :etudiants[];
  public filredliste: etudiants[];
  public list :etudiants[]; 
  name :String;
  searchText: any; 
  age:number; 
  constructor(private etudiantService : EtudiantService,private route:Router,private current:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.etudiantService.getEtudiantsListe().subscribe(
      data =>{
      this.listetudiants=data; 
    })
  }



  DeleteEtudiant(item:any){
    let i = this.listetudiants.indexOf(item);
    console.log(i);
    console.log(item.idEtudiant);
    this.etudiantService.deleteEtudiantByID(item.idEtudiant).subscribe(
      ()=>{console.log("done");this.listetudiants.splice(i,1)
    }

    )
   }
   
  getThisEtudiant(){
    this.etudiantService.getEtudiantFiltredbyname(this.name).subscribe(data2 =>{
      this.listetudiants=data2; 
    })
   }

}
