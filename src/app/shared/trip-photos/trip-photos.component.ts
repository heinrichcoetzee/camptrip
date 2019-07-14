import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { Camera, DestinationType, MediaType, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-trip-photos',
  templateUrl: './trip-photos.component.html',
  styleUrls: ['./trip-photos.component.scss'],
})
export class TripPhotosComponent implements OnInit {
  @Input() photos = [];
  @ViewChild('slides') slides: IonSlides;
  constructor(private camera:Camera) { }

  ngOnInit() {}
  ngOnChanges() {}


  removePhoto(index:number){
    this.photos.splice(index,1);
    this.slides.slidePrev();
  };

  async addPhoto() {
    const options: CameraOptions = {
      correctOrientation: true,
      destinationType: DestinationType.DATA_URL,
      mediaType: MediaType.PICTURE,
      sourceType: PictureSourceType.PHOTOLIBRARY,
      targetWidth:640
    };
    this.camera.getPicture(options).then(async (picture) => {
      const base64 = `data:image/jpeg;base64,${picture}`;
      this.photos.push(base64);
      setTimeout(()=>{
        this.slides.slideTo(this.photos.length);
      },100);
    });
}

}
