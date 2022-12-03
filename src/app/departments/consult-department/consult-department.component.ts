import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/model/department';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { PrimeNGConfig } from 'primeng/api';
import { EnseignantService } from 'src/app/core/services/enseignant.service';
import { Enseignant } from 'src/app/core/model/Enseignant';

@Component({
  selector: 'app-consult-department',
  templateUrl: './consult-department.component.html',
  styleUrls: ['./consult-department.component.css']
})
export class ConsultDepartmentComponent implements OnInit {
  closeResult: string = '';
  displayBasic: boolean = false;
  displayBasic1 :boolean = false;
  dep : Department ;
  public listDepartments :Department[];
  listEnseignant : Enseignant[];
  /*,private modalService: NgbModal*/
  constructor(private departmentService : DepartmentsService,private primengConfig: PrimeNGConfig,private enseignantService : EnseignantService) { }

  ngOnInit(): void {
    this.dep = new Department();
    this.primengConfig.ripple = true;

    this.departmentService.getDepartments().subscribe(
      data =>{
      this.listDepartments=data; 
    })
  }
  onDelete(item : Department){
    this.departmentService.deleteDepartment(item.idDepart).subscribe(
      data =>{
      console.log(data)
    })
  }
  

  showBasicDialog(item :any) {
    this.displayBasic = true;
    this.departmentService.geDepartmentById(item.idDepart).subscribe(
      data =>{
        this.dep =data
      console.log(data)
    })
}

onOpen(item :Department){
  this.displayBasic1 = true;
  this.departmentService.getEnseignantsByDepartment(item.idDepart).subscribe(data=>{
    this.listEnseignant = data;
  })
}

cancel(){
  this.displayBasic1  = false
}

updateDepartment(dep : any){
  console.log(dep)
  this.departmentService.updateDepartment(dep.idDepart,dep).subscribe(
    data =>{
      this.dep =data
    console.log(data)
  })
  this.ngOnInit
  
  this.listDepartments[this.findIndexById(this.dep.idDepart)] = this.dep;
  console.log(this.listDepartments)
  this.displayBasic = false;

}
findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.listDepartments.length; i++) {
      if (this.listDepartments[i].idDepart === id) {
          index = i;
          break;
      }
  }

  return index;
}
 /*open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }*/
}
