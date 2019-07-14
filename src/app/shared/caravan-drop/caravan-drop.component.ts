import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IUser } from '../IUser.interface';
import { ICaravan } from '../ICaravan.interface';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-caravan-drop',
  templateUrl: './caravan-drop.component.html',
  styleUrls: ['./caravan-drop.component.scss'],
})
export class CaravanDropComponent implements OnChanges {
  @Input() profile:IUser;
  @Output() add:EventEmitter<Array<ICaravan>> = new EventEmitter();
  caravans;
  caravan:ICaravan = {
    make:'',
    model:''
  };
  showAddnew:boolean = false;
  constructor(private toast:ToastController) {
    
  }

  ngOnChanges() {
    this.caravans = this.profile.caravans?this.profile.caravans : [];
  }

  async addCaravan(){
    
    if(this.caravan.make && this.caravan.model){  
      this.caravans.push(this.caravan);
      this.add.emit(this.caravans);
      this.showAddnew = false;
    }else{
      let toast = await this.toast.create({
        message: "Please select caravan make and model",
        color:"danger",
        duration: 2000
      });
      toast.present();
    }
  }

}
