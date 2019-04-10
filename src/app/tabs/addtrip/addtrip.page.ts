import { Component, OnInit, ViewChild } from '@angular/core';
import { ITrip, IMemory } from 'src/app/shared/ITrips.interface';
import { Camera, DestinationType, MediaType, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, IonSlides } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.page.html',
  styleUrls: ['./addtrip.page.scss'],
})
export class AddtripPage implements OnInit {
  trip:ITrip;
  showDetails:boolean;
  photos:Array<any> = [];
  constructor(private camera:Camera,private toast:ToastController) {
    this.trip = {
      fromDate:new Date(),
      toDate:new Date(),
      memories:[]
    };
    this.showDetails = false;
  }
  @ViewChild('slides') slides: IonSlides;
  ngOnInit() {
  }

  addTrip(){
    console.log("Trip",this.trip);
  }

  removePhoto(index:number){
    this.photos.splice(index,1);
    this.slides.slidePrev();
  };

  async uploadPhoto() {
      const options: CameraOptions = {
        correctOrientation: true,
        destinationType: DestinationType.DATA_URL,
        mediaType: MediaType.PICTURE,
        sourceType: PictureSourceType.PHOTOLIBRARY,
      };
      this.camera.getPicture(options).then(async (picture) => {
        const base64 = `data:image/jpeg;base64,${picture}`;
        this.photos.push(base64);
        setTimeout(()=>{
          this.slides.slideTo(this.photos.length);
        },100);
      });

  }


  addMemory(memory:IMemory){
    console.log("memory",memory)
    this.trip.memories.push({name:"",description:""});
  }


  removeMemory(index:number){
    console.log("removeMemory",index);
    this.trip.memories.splice(index,1);
  }

}
