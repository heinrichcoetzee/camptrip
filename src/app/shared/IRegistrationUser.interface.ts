import { ICaravan } from './ICaravan.interface';
import { IVehicle } from './IVehicle.interface';


export interface IRegistrationUser{
    name:string;
    uid?:string;
    surname:string;
    email:string;
    password?:string;
    caravans?:Array<ICaravan>;
    vehicles?:Array<IVehicle>;
    profilePicture?:any;
}