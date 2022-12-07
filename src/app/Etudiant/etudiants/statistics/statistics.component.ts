import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from 'src/app/core/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  listages:number[];
  criteria:number;
  countageundercriteria:number; 
  countageabovecriteria:number; 
  percentundercriteria :number; 
  percentabovecriteria:number; 
  constructor(private statservice:StatisticsService,private current:ActivatedRoute) {
    this.countageabovecriteria=0;
    this.countageundercriteria=0;
    this.percentundercriteria=0;
   this.percentabovecriteria=0;
   }

  ngOnInit(): void {
   this.statservice.getEtudiantsAges().subscribe((data)=>{
    this.listages=data;
    this.criteria=this.current.snapshot.params['critereage'];
    console.log(this.criteria);
    console.log(this.listages)
    for ( let i in this.listages){
      if(this.listages[i]> this.criteria){
        console.log(this.listages[i]);
        this.countageabovecriteria++;
        this.percentabovecriteria=(this.countageabovecriteria/this.listages.length)*100;

      }
     if (this.listages[i] < this.criteria){
        console.log(this.listages[i])
        this.countageundercriteria++;

        this.percentundercriteria=(this.countageundercriteria/this.listages.length)*100

      }
    }
   });
  

}
setMystyle1(){

  let style= {
    'margin': '5vmin auto',
    'border-radius': '50%',
    'width': '50vmin',
    'height': '50vmin',
    'overflow': 'hidden',
    'background':'linear-gradient(to right, #2196f3 '+this.percentabovecriteria+'%, transparent 50%),linear-gradient(to right, #2196f3 '+this.percentabovecriteria+'%, #ffc107 '+this.percentundercriteria+'%)'
  };

  return style;
}
setMystyle2(){

  let style= {
    'margin': '5vmin auto',
    'border-radius': '50%',
    'width': '50vmin',
    'height': '50vmin',
    'overflow': 'hidden',
    'background':'linear-gradient(to right, #ffc107 '+this.percentabovecriteria+'% , transparent 50%),linear-gradient(to right, #ffc107 '+this.percentundercriteria+'%, #2196f3 '+this.percentabovecriteria+'%)'
  };
  return style;
}

}
