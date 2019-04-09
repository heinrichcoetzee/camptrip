import { Component, OnInit } from '@angular/core';
import { IRegistrationUser } from 'src/app/shared/IRegistrationUser.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile:IRegistrationUser;
  constructor(private router:Router,private _fireAuth:AngularFireAuth) {
    this.profile = {
      name:"",
      surname:"",
      email:""
    }
  }

  ngOnInit() {
    this.profile.name = this._fireAuth.auth.currentUser.displayName;
    this.profile.email = this._fireAuth.auth.currentUser.email;
  }

  changePassword(){

  }
  signOut(){
   
    this._fireAuth.auth.signOut().then((signedout)=>{
      console.log("signedout",signedout)
      this.router.navigate(['login'])
    }).catch((error)=>{
      console.log("Error",error)
    });
  }

}
