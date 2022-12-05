import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../Model/student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  public list: Student[];
  public all: Student[];

  @Output() login2 = new EventEmitter<number>();


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllStudents();

  }

  userid: number;
  onLogin(user: number) {
    this.userid = user;
    this.login2.emit(user);
  }
  getAllStudents() {
    this.api.getStudents()
      .subscribe(
        (data: Student[]) => {
          this.all = data;
          console.log("debug data", this.all)
        }
      )

  }

}
