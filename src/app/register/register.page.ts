import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegistrationUser } from '../shared/IRegistrationUser.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  model:IRegistrationUser;
  errorMessage:string = "";
  constructor(private router:Router,private _fireAuth:AngularFireAuth) {
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

    this._fireAuth.auth
    .createUserWithEmailAndPassword(this.model.email.toLowerCase(),this.model.password)
    .then((user)=>{
      console.log("User - ",user);
      this._fireAuth.auth.currentUser.updateProfile({
        displayName:this.model.name + " " + this.model.surname
      }).then((updatedUser)=>{
        console.log("Updated User",updatedUser)
        this.model.name = "";
        this.model.surname = "";
        this.model.email = "";
        this.model.password = "";

        this.back();
      }).catch((error)=>{
        console.log("Could not update user",error)
        this.errorMessage = error.message;
      });
    })
    .catch((error)=>{
      console.log("Could not create user",error);
      this.errorMessage = error.message;
    })
    
  }

}
