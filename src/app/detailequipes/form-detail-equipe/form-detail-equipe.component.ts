import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/core/model/detail';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';

@Component({
  selector: 'app-form-detail-equipe',
  templateUrl: './form-detail-equipe.component.html',
  styleUrls: ['./form-detail-equipe.component.css']
})
export class FormDetailEquipeComponent implements OnInit {
 public detailequipe:Detail; 
  constructor(private servDetailequip:DetailequipeService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
this.detailequipe=new Detail();
  }
  saveDetailEquipe(){
    this.servDetailequip.addDetails(this.detailequipe).subscribe(
      ()=>{
        console.log(this.detailequipe);
       }
     )
  }
}
