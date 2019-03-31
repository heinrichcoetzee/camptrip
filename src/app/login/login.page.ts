import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  errorMessage:string;
  constructor(private router:Router, private _fireAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    if(this.email === ""){
      this.errorMessage = "Please enter email address";
      return;
    }
    
    if(this.password === ""){
      this.errorMessage = "Please enter password";
      return;
    }
    this.errorMessage = "";
      this._fireAuth.auth.signInWithEmailAndPassword(this.email.toLowerCase(),this.password)
      .then((user)=>{
        console.log("user",user);
        this.email = "";
        this.password = "";
        this.router.navigate(['main/tabs/home']);
      }).catch((error)=>{
        this.errorMessage = error.message;
      });
  }

  register(){
    this.router.navigate(['register']);
  }

}
