import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';
import { Student } from './Model/student';
import { FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  list: Student[];
  displayedColumns: string[] = ['dateDebutContrat', 'dateFinContrat', 'specialite', 'archive', 'montantContrat', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  DateD!: Date;
  DateF!: Date;
  Date1: Date;


  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllContrats();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '500'
    });
  }


  editContrat(row: any) {
    this.dialog.open(DialogComponent, {
      width: '70%',
      data: row
    })

  }


  getAllContrats() {
    this.api.getContrat()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("error while fetching the Records!!")
        }
      })
  }






  DelContrat(id: number) {
    this.api.DelContrat(id)
      .subscribe({
        next: (res) => {
          alert("Contrat Deleted Successfullly");
          this.getAllContrats()

        }
        ,
        error: () => {
          alert("Error while deleting the Contrat!!")
        }
      })



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  Reduction() {
    this.api.Makereduction()
      .subscribe({
        next: (res) => {
          alert("Contrat Reduction Successfully");
          this.getAllContrats()
        },
        error: (err) => {
          alert("error while fetching the Records!!")
        }
      })

  }


  ContratsFromDate() {
    const Date1 = formatDate(this.DateD, 'yyyy-MM-dd', 'en-US');
    const Date2 = formatDate(this.DateF, 'yyyy-MM-dd', 'en-US');

    console.log(Date1, Date2)
    this.api.ContratBetweenTwoDate(Date1, Date2).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("error while fetching the Records!!")
      }
    })
  }


}



