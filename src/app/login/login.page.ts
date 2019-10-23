import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { first } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string = "heinrichcoetzee@icloud.com";
  password:string = "Grayson#2019";
  errorMessage:string;
  loginLoading:boolean = false;
  userVerified:boolean = false;
  constructor(private router:Router, private _fireAuth:AngularFireAuth,private fb:Facebook,private toast:ToastController) { }

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
        this._fireAuth.authState.pipe(first()).subscribe((user)=>{
          if(!user.emailVerified){
            user.sendEmailVerification();
            this.errorMessage = "We sent you a verification link. Please check your email and click on the link to verify your email address.";
            this.password = "";
            this.loginLoading = false;
          }else{
            this.email = "";
            this.password = "";
            this.loginLoading = false;
            this.router.navigate(['main/tabs/home']);
          }
          
          
        });
      
      }).catch((error)=>{
        this.loginLoading = false;
        if(error.code == "auth/user-not-found"){
          this.errorMessage = "This email address is not registered.\n Please register by clicking on the 'Register' button";
        }else{
          this.errorMessage = error.message;
        }
       setTimeout(()=>{
        this.errorMessage = "";
       },3000)
      });
  }

  forgotPassword(){
    this.router.navigate(['forgotpassword']);
  }

  register(){
    this.router.navigate(['register']);
  }

  facebookLogin(){
    
    this.loginLoading = true;
    this.fb.login(['public_profile', 'email'])
    .then((res:FacebookLoginResponse)=>{
      console.log(res);
      this.loginLoading = false;
    })
    .catch(async (err)=>{
      let error = await this.toast.create({
        message:"Facebook login denied",
        duration: 2000
      });
      error.present();
      this.errorMessage = err.message;
      this.loginLoading = false;
    })
  //  this.fb.getAccessToken().then((token)=>{
  //   console.log("Token",token)
  //  }).catch((error)=>{
  //    console.log("Error",error)
  //  })
  }

}
