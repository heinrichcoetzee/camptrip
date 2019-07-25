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

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profile: IUser = {
    name: "",
    surname: "",
    email: "",
    caravans: [{ make: "Jurgens", model: '1' }]
  };
  destroy$: Subject<void> = new Subject();
  data$:Observable<any>;
  constructor(private toast: ToastController, private router: Router, private userService: UserService,private fns: AngularFireFunctions) {
    
  }

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

  async updateCaravans(caravans: Array<ICaravan>) {
    const callable = this.fns.httpsCallable('profile-updateCaravan');
    // this.profile.caravans = caravans;
    callable(caravans).toPromise().then(ret=>{
      // console.log("return ",ret)
    }).catch((err)=>{
      console.log("err - ", err)
    })
  }

  async addVehicle(vehicles: Array<IVehicle>) {
    const callable = this.fns.httpsCallable('profile-updateVehicle');
    // this.profile.caravans = caravans;
    callable(vehicles).toPromise().then(ret=>{
      // console.log("return ",ret)
    }).catch((err)=>{
      console.log("err - ", err)
    })
  }

}
