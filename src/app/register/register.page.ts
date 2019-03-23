import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegistrationUser } from '../shared/IRegistrationUser.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  model:IRegistrationUser;
  constructor(private router:Router) {
    this.model = {
      name:"",
      surname:"",
      email:"",
      password:""
    }
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['login']);
  }

  registerUser(){
    console.log("Model - ",this.model);
  }

}
