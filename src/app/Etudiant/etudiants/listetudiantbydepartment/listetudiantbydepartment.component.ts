import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-listetudiantbydepartment',
  templateUrl: './listetudiantbydepartment.component.html',
  styleUrls: ['./listetudiantbydepartment.component.css']
})
export class ListetudiantbydepartmentComponent implements OnInit {
 iddep:number;
  e:etudiants[] ;
  constructor(private etudserv:EtudiantService,private current:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.iddep=this.current.snapshot.params['etudiant.departement.idDepart'];
    console.log(this.iddep);
    this.etudserv.getEtudiantByDepartment(this.iddep).subscribe((data)=>{
      this.e=data;
      console.log(this.e);
    }

    );

  }

}
