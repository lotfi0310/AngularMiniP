import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { detailequipes } from '../model/detailequipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {
  public  url_apilist= environment.url ;
  public dp : detailequipes ; 
 getallquery='DdetailEquipe' 
  constructor(private httpClient :HttpClient) { 
    console.log(this.url_apilist);
  }
  getDetailEquipessListe():Observable<detailequipes[]>{
    return this.httpClient.get<detailequipes[]>(`${this.url_apilist+this.getallquery}`); 
  }
  addDetailequipe(detailequipe:detailequipes) {
    return this.httpClient.post(this.url_apilist+'addDetailequipe',detailequipe)
  }

  private detailequipeUp = new BehaviorSubject({}as detailequipes);
  detailequipeUp$ = this.detailequipeUp.asObservable();
  assignUniv(univUp:any){
    this.detailequipeUp.next(univUp);
  }
}
