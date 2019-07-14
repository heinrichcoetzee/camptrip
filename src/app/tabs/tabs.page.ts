import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage{

  activeTab:string = 'home';
  constructor(private router:Router,private _fireAuth:AngularFireAuth){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.activeTab = event.url.replace('/main/tabs/','');
      }
    });
  }

  ionViewWillEnter(){
    // if(this._fireAuth.auth.currentUser == null){
    //   this.router.navigate(['/login']);
    // }
  }

  openAddTrip(){
    this.router.navigate(['main/tabs/addtrip']);
  }
}
