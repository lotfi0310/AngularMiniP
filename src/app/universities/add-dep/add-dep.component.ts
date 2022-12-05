import { Component, OnInit } from '@angular/core';
import {depUniv} from "../../core/model/depUniv";
import {UniversiteService} from "../../core/services/universite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {
  public depUniv: depUniv;

  constructor(private router: Router,
              private universiteService: UniversiteService) {
  }

  ngOnInit(): void {
    this.depUniv = new depUniv();
  }

  saveDep() {
    if (this.depUniv.iddep && this.depUniv.iduniv) {
      this.universiteService.addDep(this.depUniv.iddep, this.depUniv.iduniv).subscribe(
        data => {
          this.router.navigate(['universities/']);
        })
    }
  }
}
