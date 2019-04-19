import { Component, OnInit } from '@angular/core';
import { IRegistrationUser } from 'src/app/shared/IRegistrationUser.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile:IRegistrationUser;
  profile$:Observable<any>;
  destroy$:Subject<void> = new Subject();
  picture:string;
  errorMessage:string = "";
  updatingPassword:boolean = false;
  constructor(
    private router:Router,
    private _fireAuth:AngularFireAuth,
    private _firestore:AngularFirestore,
    private toast:ToastController) {

  }

  ionViewWillEnter(){
    if(this._fireAuth.auth.currentUser == null){
      this.router.navigate(['login']);
    }
    this.profile$ = this._firestore.collection('users',(ref)=>ref.where('uid','==',this._fireAuth.auth.currentUser.uid).limit(1)).valueChanges();
  }

  ionViewDidEnter(){
      this.profile$.pipe(takeUntil(this.destroy$)).subscribe((user:IRegistrationUser)=>{
        this.profile = user[0];
        this.picture = this.profile.profilePicture?this.profile.profilePicture:undefined;
      });
  }

  ionViewDidLeave(){
      this.destroy$.next();
      this.destroy$.complete();
  }

  ngOnInit() {
  
  }

  changePassword() {
    if (this.profile.password && this.profile.password.trim() == "") {
      this.errorMessage = "Please enter your new password";
      return;
    }

    if (this.profile.password.length < 6) {
      this.errorMessage = "Password should contain at least 6 characters";
      return false;
    }
    this.updatingPassword = true;
    this._fireAuth.auth.currentUser.updatePassword(this.profile.password)
      .then(async (result) => {
        console.log("PAssword Result", result)
        let toast = await this.toast.create({
          message: "Password updated!",
          color:"green",
          duration: 2000
        });
        toast.present();
        this.profile.password = "";
        this.updatingPassword = false;
      }).catch(async (error) => {
        let toast = await this.toast.create({
          message: "Password Could not be updated!",
          color:"danger",
          duration: 2000
        });
        toast.present();
        this.errorMessage = error.message;
        setTimeout(() => {
          this.errorMessage = "";
        }, 4000)
        this.updatingPassword = false;
      })
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
