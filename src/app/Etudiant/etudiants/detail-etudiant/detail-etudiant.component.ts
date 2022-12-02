import { Component, OnInit ,Input} from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  @Input() public datafromparent :etudiants;
  constructor() { }
 
  ngOnInit(): void {

  }

}
