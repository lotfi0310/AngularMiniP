import { Component, OnInit } from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  public listetudiants :etudiants[];
  constructor(private etudiantService : EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.getEtudiantsListe().subscribe(
      data =>{
      this.listetudiants=data; 
    })
  }

}
