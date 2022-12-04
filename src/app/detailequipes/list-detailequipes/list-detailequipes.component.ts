import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailequipes } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';

@Component({
  selector: 'app-list-detailequipes',
  templateUrl: './list-detailequipes.component.html',
  styleUrls: ['./list-detailequipes.component.css']
})
export class ListDetailequipesComponent implements OnInit {
displayBasic: boolean = false;
public listdetailequipes: detailequipes[];
public filredliste: detailequipes[];
public list : detailequipes[];
salle: number;
searchText:any;
thematique:String;
detail: detailequipes;
  constructor(private detailequipeservice:DetailequipeService,private route:Router,private current:ActivatedRoute) { }

  ngOnInit(): void {
    this.detail= new detailequipes();
    this.detailequipeservice.getAlldetails().subscribe(
     (X:detailequipes[]) => {this.listdetailequipes=X;
      }
      )
    
  }
  onDelete(i : detailequipes){
    this.detailequipeservice.deleteDepartment(i.idDetailEquipe).subscribe(
      ()=>{this.route.navigate(['/detailequipes'])}
     )
  }
  updateDepartment(detail : any){
    console.log(detail)
    this.detailequipeservice.updateDetailequipe(detail.idDepart,detail).subscribe(
      data =>{
        this.detail =data
      console.log(data)
    })
    this.ngOnInit
    
    this.listdetailequipes[this.findIndexById(this.detail.idDetailEquipe)] = this.detail;
    console.log(this.listdetailequipes)
    this.displayBasic = false;
  
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

}
