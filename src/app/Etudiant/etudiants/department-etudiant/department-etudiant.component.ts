import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/core/model/department';
import { etudiants } from 'src/app/core/model/etudiants';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-department-etudiant',
  templateUrl: './department-etudiant.component.html',
  styleUrls: ['./department-etudiant.component.css']
})
export class DepartmentEtudiantComponent implements OnInit {
 id :number; 
 etudiant: etudiants; 
 departments:Department[];
  constructor(private etudserv :EtudiantService ,private current :ActivatedRoute,private depserv:DepartmentsService) { 
  }

  ngOnInit(): void {
 this.id=this.current.snapshot.params['idEtudiant'];
    this.etudserv.geEtudiantById(this.id).subscribe((data)=>{this.etudiant=data});
    console.log(this.etudiant);
}


affecterEtudiantToDepartment(){
this.depserv.getDepartments().subscribe((data:Department[])=>{
  this.departments=data;
  console.log(this.departments)
})
}


}
