import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage{

  activeTab:string = 'home';
  constructor(private router:Router){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.activeTab = event.url.replace('/main/tabs/','');
      }
    });
  }


  openAddTrip(){
    this.router.navigate(['main/tabs/addtrip']);
  }
}
