import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-department-etudiant',
  templateUrl: './department-etudiant.component.html',
  styleUrls: ['./department-etudiant.component.css']
})
export class DepartmentEtudiantComponent implements OnInit {
 id :number; 
 etudiant: etudiants; 
 
  constructor(private etudserv :EtudiantService ,private current :ActivatedRoute) { 
  }

  ngOnInit(): void {
 this.id=this.current.snapshot.params['idEtudiant'];
    this.etudserv.geEtudiantById(this.id).subscribe((data)=>{this.etudiant=data});
    console.log(this.etudiant);
}
 

}
