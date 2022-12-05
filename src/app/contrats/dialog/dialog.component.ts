import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrawerComponent } from '../drawer/drawer.component';
import { CardComponent } from '../card/card.component';
import { Contrat } from '../Model/Contrat';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  a: number = 0;
  public contrat: Contrat;
  contratForm!: FormGroup;
  actionBtn: string = "save";
  AddUpdate: string = "Add"
  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<DialogComponent>) { }
  @Input() drawer: DrawerComponent;
  ngOnInit(): void {




    console.log(this.editData);
    if (this.editData) {
      this.actionBtn = "Update";
      this.AddUpdate = "Update";
      this.contratForm = this.formBuilder.group({
        dateDebutContrat: [this.editData.dateDebutContrat, Validators.required],
        dateFinContrat: [this.editData.dateFinContrat, Validators.required],
        specialite: [this.editData.specialite, Validators.required],
        archive: [this.editData.archive, Validators.required],
        montantContrat: [this.editData.montantContrat, Validators.required]
      });

    } else {
      this.contratForm = this.formBuilder.group({
        dateDebutContrat: ['', Validators.required],
        dateFinContrat: ['', Validators.required],
        specialite: ['', Validators.required],
        archive: ['', Validators.required],
        montantContrat: ['', Validators.required]
      });
    }


  }
  userid2: number;

  onLogin2(user: number) {
    this.userid2 = user;
  }



  addContrat() {
    console.log("test", this.contratForm.value);
    if (!this.editData) {
      if (this.contratForm.valid) {
        this.api.postContrat(this.contratForm.value)
          .subscribe({
            next: () => {
              alert("Contrat Added successfully");
              this.contratForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("error while adding the contrat")
            }
          })
      }

    } else {
      this.updateContrat()
    }
  }
  updateContrat() {
    this.contrat = this.contratForm.value;
    this.contrat.idContrat = this.editData.idContrat

    this.api.updateContrat(this.contrat)
      .subscribe({
        next: (res) => {
          alert("Contrat updated Successfully");
          this.contratForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the record!!");
        }
      })

    this.api.AddContratToStudent(this.editData.idContrat, this.userid2)
      .subscribe({
        next: (res) => {
          alert("Contrat Affected to Student Successfully");
          this.contratForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while Affecting  Contrat!!");
        }
      })




  }


  onPress() {
    { DrawerComponent }
  }

  onmouseOver(): boolean {
    if (!this.contratForm.valid && this.a == 0) {
      this.buttonMoveLeft();
      this.a = 1;
      return false;
    }
    if (!this.contratForm.valid && this.a == 1) {
      this.buttonMoveRight();
      this.a = 2;
      return false;
    }
    if (!this.contratForm.valid && this.a == 2) {
      this.buttonMoveLeft();
      this.a = 1;
      return false;
    }

    else {
      document.getElementById('submit-btn')!.style.cursor = 'pointer';
      this.addContrat();
      return false;

    };

  };





  buttonMoveLeft() {

    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(-160%)';

  };


  buttonMoveRight() {

    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(0%)';

  };


  resetBtn() {
    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(0%)';

  };








}
