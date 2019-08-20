import * as functions from 'firebase-functions';
import { Firestore, QuerySnapshot } from '@google-cloud/firestore';
import { ITrip } from '../../src/app/shared/ITrips.interface';
import { IGetStats } from '../../src/app/shared/IGetStats.interface';

const getstats = functions.https.onCall(async ({}, context) => {
    const uid = context && context.auth ? context.auth.uid : '';
    console.log("uid", uid)
    const firestore = new Firestore();
    // const userRef = firestore.collection('users');
    const tripRef = firestore.collection('trips');

    let trips:any = [];
    // await userRef.where('uid', '==', uid).get().then((snapshot: QuerySnapshot) => {
    //     key = snapshot.docs[0].data().key;
    // });
    
    await tripRef.where('uid','==',uid).get().then((snapshot: QuerySnapshot)=>{
        trips  = snapshot.docs.map(i=>i.data());
        console.log('snapshot - ',trips)
    });

    const statObj:IGetStats = {
        totalTrips: trips.length,
        totalMemories: trips.map((t:ITrip)=>t.memories).length
    }
    return  { data: statObj, message: "Stats Retreived Successfully", code: 200 };
})



module.exports = getstats;