import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IUser } from '../IUser.interface';
import { ICaravan } from '../ICaravan.interface';
import { UserService } from 'src/app/services/user.service';
import { ToastController, ModalController, AlertController } from '@ionic/angular';


export class CaravanModal {
  constructor(){
    
  }
}

@Component({
  selector: 'app-caravan-drop',
  templateUrl: './caravan-drop.component.html',
  styleUrls: ['./caravan-drop.component.scss'],
})
export class CaravanDropComponent implements OnChanges {
  @Input() profile:IUser;
  @Output() update:EventEmitter<Array<ICaravan>> = new EventEmitter();
  caravans;
  caravan:ICaravan = {
    make:'',
    model:''
  };
  showAddnew:boolean = false;
  constructor(private toast:ToastController,public modal: ModalController,private alertCtrl:AlertController) {
    
  }

  ngOnChanges() {
    this.caravans = this.profile.caravans?this.profile.caravans : [];
  }

  async addCaravan(){
    
    if(this.caravan.make && this.caravan.model){  
      this.caravans.push(this.caravan);
      this.update.emit(this.caravans);
      this.caravan = {make:"",model:''};
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

  editCaravan(caravan:ICaravan){
    delete caravan['editing'];
    this.caravans[(parseFloat(caravan._id)-1)] = caravan;
    this.update.emit(this.caravans)
  }

   async deleteCaravan(caravan:ICaravan,){
    let alert = await this.alertCtrl.create({
      message: `Are you sure you want to delete ${caravan.make} ${caravan.make}?`,
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.caravans.splice((parseFloat(caravan._id)-1),1);
          this.update.emit(this.caravans)
        }
      }]
    })
    alert.present();
   
  }

}
