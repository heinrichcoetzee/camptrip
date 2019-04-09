import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { Facebook } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string = "";
  password:string = "";
  errorMessage:string;
  loginLoading:boolean = false;
  constructor(private router:Router, private _fireAuth:AngularFireAuth,private fb:Facebook) { }

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
    this.loginLoading = true;
      this._fireAuth.auth.signInWithEmailAndPassword(this.email.toLowerCase(),this.password)
      .then((user)=>{
        console.log("user",user);
        this.email = "";
        this.password = "";
        this.loginLoading = false;
        this.router.navigate(['main/tabs/home']);
      }).catch((error)=>{
        this.loginLoading = false;
        this.errorMessage = error.message;
      });
  }

  register(){
    this.router.navigate(['register']);
  }

  facebookLogin(){
    this.errorMessage = "";
    this.router.navigate(['main/tabs/home']);
  //  this.fb.getAccessToken().then((token)=>{
  //   console.log("Token",token)
  //  }).catch((error)=>{
  //    console.log("Error",error)
  //  })
  }

}
