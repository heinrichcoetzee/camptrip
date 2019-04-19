import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email:string = "";
  errorMessage:string = "";
  successMessage:string = "";
  resetPasswordLoading:boolean = false;
  constructor(private router:Router,private _fireAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  resetPassword(){
    this.resetPasswordLoading = true;
    this._fireAuth.auth.sendPasswordResetEmail(this.email).then((result)=>{
        this.successMessage = "We sent you an email. Please open the link to reset your password.";
        this.email = "";
        this.resetPasswordLoading = false;
    }).catch((error)=>{
      console.log("error",error)
      this.resetPasswordLoading = false;
      if(error.code == "auth/user-not-found"){
        this.errorMessage = "This email address is not registered.";
      }else{
        this.errorMessage = error.message;
      }
    })
  }


  back(){
    this.router.navigate(['login']);
  }

}
