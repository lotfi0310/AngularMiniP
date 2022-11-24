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
  public nomE :String; 
  etudiant:etudiants ; 
  constructor(private etudiantService : EtudiantService,private route:Router) { }

  ngOnInit(): void {
    this.etudiantService.getEtudiantsListe().subscribe(
      data =>{
      this.listetudiants=data; 
    })
  }

  getfiltred(){
  this.etudiantService.getEtudiantFiltredbyname(this.nomE).subscribe(data2 =>{
    this.filredliste=data2; 
    this.route.navigate(['etudiants/']);
    console.log(this.filredliste);
    console.log(this.nomE);
  })
  }



}
