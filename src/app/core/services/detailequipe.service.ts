import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail } from '../model/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {
 url='http://localhost:8089/SpringMVC/DetailEquipeController/AddDetailEquipe/';
  constructor(private http:HttpClient) { 


  }

  addDetails( d:Detail){
console.log(this.url)
    return this.http.post(this.url,d);
    
  }
}
