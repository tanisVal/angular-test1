import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  message = '';
  user;

  constructor(private router: Router) {
    this.user ={
      'username':'',
      'password':''
    }
   }

  ngOnInit() {
  }

  onSubmit(){
    // if(this.user.username=='angular' && this.user.password=='angular'){
    //   this.message = 'Correctoooo!!!'; 
      this.router.navigate(['articleList']);
    // }else{
    //   this.message = 'Datos incorrectos, Verifique!!!';
    // }

  }
}