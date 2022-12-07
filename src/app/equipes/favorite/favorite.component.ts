import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public listE: Equipe[];


  constructor(private equipeService : EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getAllfav().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
      }
    )
  }

}
