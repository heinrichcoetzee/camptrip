import { Component, OnInit } from '@angular/core';
import { IRegistrationUser } from 'src/app/shared/IRegistrationUser.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  constructor(private router:Router,private _fireAuth:AngularFireAuth,private _firestore:AngularFirestore) {

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
        console.log("profile ",this.profile);
        this.picture = this.profile.profilePicture?this.profile.profilePicture:undefined;
        console.log(this.picture)
      });
  }

  ionViewDidLeave(){
      this.destroy$.next();
      this.destroy$.complete();
  }

  ngOnInit() {
  
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
