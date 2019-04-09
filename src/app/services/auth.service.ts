import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  constructor(private facebook:Facebook) { }

  facebookLogin():Observable<any>{
      return new Observable((observer)=>{
        this.facebook.login(['public_profile', 'email'])
        .then((res: FacebookLoginResponse) => {
          console.log('Logged into Facebook!', res);
          observer.next(res);
          observer.unsubscribe();
        })
        .catch(e => {
          console.log('Error logging into Facebook', e)
          observer.error(e);
          observer.unsubscribe();
        });
        
      })
   
  }
}
