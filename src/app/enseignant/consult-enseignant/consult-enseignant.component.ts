import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/model/department';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-consult-enseignant',
  templateUrl: './consult-enseignant.component.html',
  styleUrls: ['./consult-enseignant.component.css']
})
export class ConsultEnseignantComponent implements OnInit {
  displayBasic = false;
  listEnseignants : Enseignant[];
  departments : Department[];
  ens :Enseignant;
  constructor(private enseignantService : EnseignantService, private departmentService : DepartmentsService) { }

  ngOnInit(): void {
    this.ens = new Enseignant();

    this.listEnseignants = [];
    this.enseignantService.getEnseignants().subscribe(
      data => this.listEnseignants =data
    )
    this.departmentService.getDepartments().subscribe(
      data=>{
        this.departments =data;
      }
    )
  }
  showBasicDialog(item :Enseignant) {
    
    this.displayBasic = true;
    this.enseignantService.geEnseignantById(item.idEnseignant).subscribe(
      data =>{
        this.ens =data
      console.log(data)
    })
}
updateEnseignant(ens : Enseignant){
  console.log(ens)
  this.enseignantService.updateEnseignant(ens.idEnseignant,ens).subscribe(
    data =>{
      this.ens =data
    console.log(data)
  })
  this.ngOnInit
  this.listEnseignants[this.findIndexById(this.ens.idEnseignant)] = this.ens;
  console.log(this.listEnseignants)
  this.displayBasic = false;

}
onDelete(item : Enseignant){
  this.enseignantService.deleteEnseignant(item.idEnseignant).subscribe(
    data =>{
    console.log(data)
  })
}

findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.listEnseignants.length; i++) {
      if (this.listEnseignants[i].idEnseignant === id) {
          index = i;
          break;
      }
  }

  return index;
}
}
