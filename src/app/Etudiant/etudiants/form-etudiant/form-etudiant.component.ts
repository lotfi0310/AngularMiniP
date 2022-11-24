import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { url } from 'inspector';
import { find } from 'rxjs';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';



@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  public etudiant : etudiants ;
  imageSrc: string;
  idEtudiant : number ; 
  action:string; 
  constructor(private etudiantService: EtudiantService, private route: Router, private current : ActivatedRoute) {
  
   }

  ngOnInit(): void {
    this.idEtudiant=this.current.snapshot.params['idEtudiant']; 
    if(this.idEtudiant!=null){
      this.action="update";
      this.etudiantService.geEtudiantById(this.idEtudiant).subscribe(
        (object : etudiants)=> this.etudiant=object)
        console.log(this.etudiant)
        console.log(this.idEtudiant)
      }else
      { this.action="add";
        this.etudiant = new etudiants();
      }
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(reader.result);
      };
    }
  }
  saveEtudiant(){
    if(this.action!='update')
    { 
       this.etudiant.picture=this.imageSrc;
      this.etudiantService.addEtudiant(this.etudiant).subscribe(
        ()=>{
          this.route.navigate(['/etudiants']);
          console.log(this.etudiant);
        }
      );
    }
    else {
      this.etudiant.picture=this.imageSrc;
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(
       ()=>{ this.route.navigate(['/etudiants'])}
      )
    }
  }


  DeleteEtudiant(){
    this.etudiantService.deleteEtudiantByID(this.idEtudiant).subscribe(
     ()=>{ this.route.navigate(['/etudiants'])}
    )
   }
 


 

}
