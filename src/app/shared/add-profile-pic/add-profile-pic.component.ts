import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Camera, DestinationType, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-profile-pic',
  templateUrl: './add-profile-pic.component.html',
  styleUrls: ['./add-profile-pic.component.scss'],
})
export class AddProfilePicComponent implements OnChanges {
  @Output() updatePhoto:EventEmitter<any> = new EventEmitter();
  @Input() picture:string = "../../../assets/images/user_default.jpg";
  loading:boolean = false; 
  constructor(private camera:Camera) { }

  ionViewDidEnter(){
 
    if(typeof this.picture =="undefined"){
      this.picture = "../../../assets/images/user_default.jpg";
    };
    console.log("Picture Changed",this.picture);
  }

  addPicture(sourceType:number){
    this.loading = false;
    const cameraOptions:CameraOptions = {
      quality:50,
      destinationType:DestinationType.DATA_URL,
      sourceType:sourceType,
      correctOrientation:true
    };
    
  this.camera.getPicture(cameraOptions).then((picture)=>{
      const base64 = `data:image/jpeg;base64,${picture}`;
      this.updatePhoto.emit(base64)
      this.picture = base64;
      this.loading = false;
    }).catch(()=>{
     this.loading = false;
    });

  }

}
