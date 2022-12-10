import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../core/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    username: '',
    password: '',
  };


  constructor(/*private snack:MatSnackBar,*/private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  formSubmit() {

    //console.log("clicked");

    if (this.loginData.username.trim() == '' || this.loginData.username == null) {

      Swal.fire('Champ obligatoire !!', 'Username est un champ obligatoire', 'error');

      /*  this.snack.open('Username est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {

      Swal.fire('Champ obligatoire !!', 'Password est un champ obligatoire', 'error');


      /*  this.snack.open('password est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("succes");
        console.log(data);

        this.login.loginUser(data.token);
        console.log("debug token", data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            console.log("hellobgbdbdbd");
            this.login.setUser(user);
            // console.log(user);

            if (this.login.getUserRole() == 'NORMAL') {

              Swal.fire('Bienvenue', this.login.getUser().username, 'success').then((result) => {
                if (result.isConfirmed) {

                  this.router.navigate(['/']);

                  // window.location.href='/';
                }
              });
              //  window.location.href='/';

            } else {
              this.login.logout();
            }



          }
        )



      },
      (error) => {
        console.log("Error");
        console.log(error);
        Swal.fire('Information Invalide', '', 'error');
      }
    );



  }

}
