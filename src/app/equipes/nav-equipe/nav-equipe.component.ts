import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Equipe } from 'src/app/core/model/equipe';
import { Router, ActivatedRoute } from '@angular/router';
import { FormEquipeComponent } from '../form-equipe/form-equipe.component';

@Component({
  selector: 'app-nav-equipe',
  templateUrl: './nav-equipe.component.html',
  styleUrls: ['./nav-equipe.component.css']
})
export class NavEquipeComponent implements OnInit {

  constructor(private equipeService: EquipeService,private router:Router) { }
  searchText: any;
  public listE: Equipe[];

  ngOnInit(): void {
    this.equipeService.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
        console.log("ojn",this.listE)

      }
    )
  }
  add(){
    this.router.navigate(['/equipes/add']);
   // {FormEquipeComponent};

  }
  fav(id: number){
   console.log("fav");
   console.log("id c h",id)
   this.equipeService.fav(id).subscribe(
  )
  }
}
