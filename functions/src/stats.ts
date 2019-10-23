import * as functions from 'firebase-functions';
import { Firestore, QuerySnapshot } from '@google-cloud/firestore';
import { ITrip } from '../../src/app/shared/ITrips.interface';
import { IGetStats } from '../../src/app/shared/IGetStats.interface';

const getstats = functions.https.onCall(async ({}, context) => {
    const uid = context && context.auth ? context.auth.uid : '';
    const firestore = new Firestore();
    const tripRef = firestore.collection('trips');
    let trips:Array<ITrip> = [];

    await tripRef.where('uid','==',uid).get().then((snapshot: QuerySnapshot)=>{
        trips  = snapshot.docs.map(i=>i.data());
    });

    const statObject:IGetStats = {
        totalTrips: trips.length,
        totalMemories: trips.map((t:ITrip)=>t.memories).length
    }
    return  { data: statObject, message: "Stats Retreived Successfully", code: 200 };
})

module.exports = getstats;