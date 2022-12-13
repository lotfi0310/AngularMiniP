import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm!: FormGroup
  title='formvalidation'
  submitted = false ; 
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group( {
      nom: ['',[ Validators.required,Validators.minLength(4)]],
      prenom: ['',[ Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]]

    })
  }
  onSubmit() {
    this.submitted = true; 
    if (this.registerForm.invalid) {
      return
    } 
    alert("sucess")
  }

}
