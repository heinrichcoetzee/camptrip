import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  public profile$:Observable<any> = new Observable();
  constructor(private _fireAuth:AngularFireAuth,private _firestore:AngularFirestore) {   
  }


  getUserProfile():Observable<any>{
    console.log("Getting profile",this._fireAuth.auth.currentUser.uid);
    return this._firestore.collection('users',(ref)=>ref.where('uid','==',this._fireAuth.auth.currentUser.uid).limit(1)).snapshotChanges()
    .pipe(map(user => user.map(this.setKey)));
    
  }


  setKey(_:any){
    const object = _.payload.doc.data();
    object.key = _.payload.doc.id;
    return object;
}

updateProfile(key:string,update:any):Promise<void>{

  return this._firestore.collection('users').doc(key).update(update);
};

}
