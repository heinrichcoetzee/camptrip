import { Injectable } from '@angular/core';
import { ITrip } from '../shared/ITrips.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  editTrip:ITrip = {};
  constructor() { }
}
