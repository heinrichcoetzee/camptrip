import * as functions from 'firebase-functions';
import { Firestore, QuerySnapshot } from '@google-cloud/firestore';


const getprofile = functions.https.onCall(async ({}, context) => {
    const uid = context && context.auth ? context.auth.uid : '';
    
    const firestore = new Firestore();
    const userRef = firestore.collection('users');

    let profile:any;
    await userRef.where('uid', '==', uid).get().then((snapshot: QuerySnapshot) => {
        profile = snapshot.docs[0].data();
    });
    
    return  { data: profile, message: "Stats Retreived Successfully", code: 200 };
})


module.exports = getprofile;