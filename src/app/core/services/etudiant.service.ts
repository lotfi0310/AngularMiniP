import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { etudiants } from '../model/etudiants';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 public  url_apilist= environment.url ;
 getallquery='DisplayStudents' 
  constructor(private httpClient :HttpClient) {
    console.log(this.url_apilist);

   }
  getEtudiantsListe():Observable<etudiants[]>{
    return this.httpClient.get<etudiants[]>(`${this.url_apilist+this.getallquery}`); 

  }
 
}
