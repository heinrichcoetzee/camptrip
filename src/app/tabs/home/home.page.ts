import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/IUser.interface';
import { Subject } from 'rxjs';
import { takeUntil, } from 'rxjs/operators';
import { ICaravan } from 'src/app/shared/ICaravan.interface';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IVehicle } from 'src/app/shared/IVehicle.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profile: IUser = {
    name:"",
surname:"",
email:"",
caravans:[{make:"Jurgens",model:'1'}]

  };
  destroy$: Subject<void> = new Subject();

  constructor(private toast: ToastController, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

  }

  ionViewDidEnter() {
    this.userService.getUserProfile().subscribe((user: Array<IUser>) => {
      this.profile = user[0];
    })
  }

  ionViewDidLeave() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async addCaravan(caravans: Array<ICaravan>) {
    this.userService.updateProfile(this.profile.key, { caravans });
  }

  async addVehicle(vehicles: Array<IVehicle>) {
    this.userService.updateProfile(this.profile.key, { vehicles });
  }

}
