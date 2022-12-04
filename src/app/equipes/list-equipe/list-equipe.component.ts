import { Component, OnInit,Output,EventEmitter,Input, Directive } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  @Output() notification = new EventEmitter();
  searchText: any;
  constructor() { }
  ngOnInit(): void {

  }
  notifyParent(){
    this.notification.emit(this.equipe.idEquipe )
  }

}
