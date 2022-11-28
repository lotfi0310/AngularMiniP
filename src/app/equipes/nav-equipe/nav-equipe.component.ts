import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Equipe } from 'src/app/core/model/equipe';

@Component({
  selector: 'app-nav-equipe',
  templateUrl: './nav-equipe.component.html',
  styleUrls: ['./nav-equipe.component.css']
})
export class NavEquipeComponent implements OnInit {

  constructor(private equipeService: EquipeService) { }
  searchText: any;
  public listE: Equipe[];

  ngOnInit(): void {
    this.equipeService.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
      }
    )
  }

}
