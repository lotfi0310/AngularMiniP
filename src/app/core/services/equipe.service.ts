import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public url=environment.url+'/EquipeController/'
  public urlAff=this.url+'displayEquipes/'
  public urlAdd=this.url+'addEquipe/' 
  public urlGet=this.url+'displayEquipeById/' 
  public urlUpd=this.url+'updateEquipe/'
  public urlDel=this.url+'deleteEquipe/' 
  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<Equipe[]>(this.urlAff)
  }
  addEquipe(e:Equipe){
    return this.http.post(this.urlAdd,e)
  }
  getEquipeById(id:number){
    return this.http.get<Equipe>(this.urlGet+id)
  }
  UpdateEquipe(e: Equipe){
    return this.http.put(this.urlUpd,e)
  }
  DeleteEquipe(id: number){
    return this.http.delete(this.urlDel+id)
  }
}
