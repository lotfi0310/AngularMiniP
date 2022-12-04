import { Component, OnInit } from '@angular/core';
import { stades } from 'src/app/core/model/stade';
import { EquipeService } from 'src/app/core/services/equipe.service';


@Component({
  selector: 'app-list-stade',
  templateUrl: './list-stade.component.html',
  styleUrls: ['./list-stade.component.css']
})
export class ListStadeComponent implements OnInit {
  public listE : stades[];

  constructor(private equipeService : EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getAllStads().subscribe(
      (X:stades[])=>{
        this.listE = X;
      }
    )
  }

}
