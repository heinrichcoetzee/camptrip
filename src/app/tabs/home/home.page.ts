import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/IUser.interface';
import { Subject, Observable } from 'rxjs';
import { takeUntil, } from 'rxjs/operators';
import { ICaravan } from 'src/app/shared/ICaravan.interface';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IVehicle } from 'src/app/shared/IVehicle.interface';
import { AngularFireFunctions } from '@angular/fire/functions';
import { IGetStats } from 'src/app/shared/IGetStats.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profile: IUser;
  destroy$: Subject<void> = new Subject();
  data$:Observable<any>;
  stats:IGetStats;
  constructor(private toast: ToastController, private router: Router, private userService: UserService,private fns: AngularFireFunctions) {
    
  }

  ngOnInit() {
   
  }

  ionViewWillEnter() {

  }

  ionViewDidEnter() {
    this.userService.getUserStats().toPromise().then((stats:IGetStats)=>{
      this.stats = stats;
    });

    this.userService.getUserProfile().toPromise().then((user: IUser) => {
      this.profile = user;
    });
  }

  ionViewDidLeave() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async updateCaravans(caravans: Array<ICaravan>) {
    const callable = this.fns.httpsCallable('profile-updatecaravan');
    // this.profile.caravans = caravans;
    callable(caravans).toPromise().then(ret=>{
      // console.log("return ",ret)
    }).catch((err)=>{
      console.log("err - ", err)
    })
  }

  async updateVehicle(vehicles: Array<IVehicle>) {
    const callable = this.fns.httpsCallable('profile-updatevehicle');
    // this.profile.caravans = caravans;
    callable(vehicles).toPromise().then(ret=>{
      // console.log("return ",ret)
    }).catch((err)=>{
      console.log("err - ", err)
    })
  }

}
