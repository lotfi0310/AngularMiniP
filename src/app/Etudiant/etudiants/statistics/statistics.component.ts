import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/core/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  listages:number[];
  countageunder20:number; 
  countageabove20:number; 
  percentunder20 :number; 
  percentabove20:number; 
  constructor(private statservice:StatisticsService) {
    this.countageabove20=0;
    this.countageunder20=0;
    this.percentunder20=0;
   this.percentabove20=0;
   }

  ngOnInit(): void {
   this.statservice.getEtudiantsAges().subscribe((data)=>{
    this.listages=data;
    console.log(this.listages)
    for ( let i in this.listages){
      if(this.listages[i]> 20){
        console.log(this.listages[i]);
        this.countageabove20++;
        this.percentabove20=(this.countageabove20/this.listages.length)*100;

      }
     if (this.listages[i] < 20){
        console.log(this.listages[i])
        this.countageunder20++;

        this.percentunder20=(this.countageunder20/this.listages.length)*100

      }
    }
   });
  

}
setMystyle(){

  let style= {
    'margin': '5vmin auto',
    'border-radius': '50%',
    'width': '90vmin',
    'height': '90vmin',
    'overflow': 'hidden',
    'background':'linear-gradient(to right, #2196f3 '+this.percentabove20+'%, transparent 50%),linear-gradient(to right, #2196f3 '+this.percentabove20+'%, #ffc107 '+this.percentunder20+'%)'
  };

  return style;
}

}
