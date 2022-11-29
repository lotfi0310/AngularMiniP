import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-etudiant-contrat',
  templateUrl: './etudiant-contrat.component.html',
  styleUrls: ['./etudiant-contrat.component.css']
})
export class EtudiantContratComponent implements OnInit {
 id:number; 
 contratetudiant: etudiants; 
  constructor(private serviceEtudiant:EtudiantService,private current:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.current.snapshot.params['idEtudiant'];
    this.serviceEtudiant.geEtudiantById(this.id).subscribe((data)=>
      {
 this.contratetudiant=data;
      }
    )
  }

}
