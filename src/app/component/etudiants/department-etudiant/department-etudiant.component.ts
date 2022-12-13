import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from '../../../../../src/app/core/model/etudiants';
import { EtudiantService } from '../../../../../src/app/core/services/etudiant.service';
import { LoginService } from '../../../../../src/app/core/services/login.service';
@Component({
  selector: 'app-department-etudiant',
  templateUrl: './department-etudiant.component.html',
  styleUrls: ['./department-etudiant.component.css']
})
export class DepartmentEtudiantComponent implements OnInit {
  id: number;
  etudiant: etudiants;
  role: String;
  constructor(private etudserv: EtudiantService, private current: ActivatedRoute, private loginserv: LoginService) {
    this.role = this.loginserv.getUserRole();
    this.id = this.current.snapshot.params['idEtudiant'];

  }

  ngOnInit(): void {
    this.getDepartmentEtudiant();
  }



  getDepartmentEtudiant() {
    this.etudserv.geEtudiantById(this.id)
      .subscribe((res) => {
        this.etudiant = res;
      })
  }


}

