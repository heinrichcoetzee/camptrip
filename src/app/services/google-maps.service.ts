import { Injectable } from '@angular/core';

@Injectable()
export class GoogleMapsService {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  apiKey: string = "YOUR_API_KEY";

  constructor(public geolocation: Geolocation) {

  }

}
