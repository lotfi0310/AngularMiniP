import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  public listE: Equipe[];
  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
      }
    )
  }

}
