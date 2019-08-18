export interface IMemory {
    name?: string;
    description?: string;
}

export interface ITrip {
    uid?: string;
    key?: string;
    name?: string;
    location?: string;
    description?: string;
    fromDate?: Date;
    toDate?: Date;
    duration?: number;
    caravanUsed?: string;
    vehicleUsed?: string;
    kilometersTraveled?: number;
    memories?: Array<IMemory>;
    photos?: Array<any>;
}
