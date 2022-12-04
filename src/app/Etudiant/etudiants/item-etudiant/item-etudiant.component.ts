import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';

@Component({
  selector: 'app-item-etudiant',
  templateUrl: './item-etudiant.component.html',
  styleUrls: ['./item-etudiant.component.css']
})
export class ItemEtudiantComponent implements OnInit {
  @Input() etudiant: any;
  @Output() deleteEtudiant=new EventEmitter<any>();
  
  constructor() { 
  }

  ngOnInit(): void {
    this.getEtudiantdetails(this.etudiant);
  }
  delete(){
    this.deleteEtudiant.emit(this.etudiant);
  }
 
  getEtudiantdetails(etudiant:any){
   return etudiant;
  }
  
  
   
}
