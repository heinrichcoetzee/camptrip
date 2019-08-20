import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable()
export class UserService {
  public profile$:Observable<any> = new Observable();
  constructor(private _fireAuth:AngularFireAuth,private _firestore:AngularFirestore,private fns:AngularFireFunctions) {   
  }

  getUserStats():Observable<any>{
    const callable = this.fns.httpsCallable('profile-getstats');
    return callable({}).pipe(map(i=>i.data));
  }

  getUserProfile():Observable<any>{
    const callable = this.fns.httpsCallable('profile-getprofile');
    return callable({}).pipe(map(i=>i.data));
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
