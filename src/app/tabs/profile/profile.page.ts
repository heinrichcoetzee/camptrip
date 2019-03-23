import { Component, OnInit } from '@angular/core';
import { IRegistrationUser } from 'src/app/shared/IRegistrationUser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile:IRegistrationUser;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  changePassword(){

  }
  signOut(){
    this.router.navigate(['login'])
    localStorage.clear();
  }

}
