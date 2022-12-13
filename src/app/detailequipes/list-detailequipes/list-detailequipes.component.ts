import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { detailequipes } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';
import {jsPDF} from "jspdf";
@Component({
  selector: 'app-list-detailequipes',
  templateUrl: './list-detailequipes.component.html',
  styleUrls: ['./list-detailequipes.component.css']
})
export class ListDetailequipesComponent implements OnInit {
  @ViewChild('content' , {static: false}) el!: ElementRef;
 // orderHeader: String ='';
 // isDescOrder: boolean = true;

  p: number =1;
  key:string = 'salle';
  displayBasic: boolean = false;
  public listdetailequipes: detailequipes[];
  public filredliste: detailequipes[];
  public list: detailequipes[];
  salle: number;
  searchText: string= '';
  thematique: String;
  detail: detailequipes;
  constructor(private detailequipeservice: DetailequipeService, private route: Router, private current: ActivatedRoute) { }
  reverse: boolean = false;
  ngOnInit(): void {
    this.detail = new detailequipes();
    this.detailequipeservice.getAlldetails().subscribe(
      (X: detailequipes[]) => {
        this.listdetailequipes = X;
      }
    )

  }
  red = true ;
  green=false ; 
  green2= false ;

  onDelete(i: detailequipes) {
    this.detailequipeservice.deleteDepartment(i.idDetailEquipe).subscribe();
    location.href = "http://localhost:4200/detailequipes"
  }
  updateDepartment(detail: number) {
    location.href = `http://localhost:4200/detailequipes/edit/${detail}`

  }
  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.listdetailequipes.length; i++) {
      if (this.listdetailequipes[i].idDetailEquipe === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  sort(key) {
    this.key= key;
    this.reverse = !this.reverse;


  }
  makePDF() {
    let pdf = new jsPDF('p' ,'pt' ,'a2');
    pdf.html(this.el.nativeElement, { callback: (pdf) => {pdf.save("demo.pdf");}});
    

  }
  changeColor () {
    this.red= false; 
    this.green = true;
    this.green2 = false;
  }
 
  }
  
 

