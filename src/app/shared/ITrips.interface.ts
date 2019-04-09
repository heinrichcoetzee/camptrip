export interface IMemory {
    name?:string;
    description?:string;
}

export interface ITrip{
    name?:string;
    location?:string;
    description?:string;
    fromDate?:Date;
    toDate?:Date;
    duration?:number;
    caravanUsed?:string;
    vehicleUsed?:string;
    kilometersTraveled?:number;
    memories?:Array<IMemory>;
}