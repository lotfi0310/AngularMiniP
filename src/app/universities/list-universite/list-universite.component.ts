import { Component, OnInit } from '@angular/core';
import {Universite} from "../../core/model/universite";
import {UniversiteService} from "../../core/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  view:string;
  public listuniversite :Universite[];
  public univjson: any;
  constructor(private universiteService : UniversiteService,
              private router:Router) { }

  ngOnInit(): void {
    this.view="U_List";

    this.universiteService.getlistuniversities().subscribe(
      data =>{
        this.listuniversite=data;
      })
  }


public addNew(){

  this.router.navigate(['universities/add']);
  this.universiteService.assignUniv(null);
}



public  univDetails(item: any){
  this.univjson=item;
  this.view="U_Detail";

}
rediretToList(type:any){
    this.view=type;
}

  univUpdate(item:any) {
    this.universiteService.assignUniv(item);
    this.router.navigate(['universities/add']);
  }
}
