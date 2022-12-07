import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/model/department';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-dep',
  templateUrl: './list-dep.component.html',
  styleUrls: ['./list-dep.component.css']
})
export class ListDepComponent implements OnInit {
 departments: Department[]; 
 idstudent: number;
  constructor( private depserv:EtudiantService,private route :ActivatedRoute,private routeme:Router) {
    this.idstudent=this.route.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.depserv.getDepartments().subscribe((data)=>{
      this.departments=data;
      console.log(this.departments);
    });
  }

  affectethisdeptostudent(iddep:number){
    console.log(iddep,this.idstudent);
    this.depserv.affecterEtudiantToDepartment(iddep,this.idstudent).subscribe(()=>{
      console.log("done");
      this.routeme.navigate(['/etudiants/department-etudiant',this.idstudent]);
    })
  }

}
