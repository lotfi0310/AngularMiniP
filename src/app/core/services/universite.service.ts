import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Universite} from "../model/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  public  url_list= environment.url ;
  public univ : Universite;
  getalluniversities='displayUniversities'
  constructor(private httpClient :HttpClient) {
    console.log(this.url_list);

  }
  getlistuniversities():Observable<Universite[]>{
    return this.httpClient.get<Universite[]>(`${this.url_list+this.getalluniversities}`);
  }

  getUniversityById(id : number):Observable <Universite>{
    return this.httpClient.get<Universite>(this.url_list+'displayUniversityBYId/'+id);
  }

  addUniversite(univ:Universite){
    return this.httpClient.post(this.url_list+'addUniversity',univ)
  }

  private univUp = new BehaviorSubject({}as Universite);
  univUp$ = this.univUp.asObservable();
  assignUniv(univUp:any){
    this.univUp.next(univUp);
  }

}

