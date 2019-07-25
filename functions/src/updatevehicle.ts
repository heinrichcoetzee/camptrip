import * as functions from 'firebase-functions';
import { Firestore, QuerySnapshot } from '@google-cloud/firestore';
import { IVehicle } from '../../src/app/shared/IVehicle.interface';

const updatevehicle = functions.https.onCall(async (vehicles: Array<IVehicle>, context) => {
    const uid = context && context.auth ? context.auth.uid : '';
    console.log("User", vehicles)
    console.log("uid", uid)
    const firestore = new Firestore();
    const userRef = firestore.collection('users');
    let key = "";
    await userRef.where('uid', '==', uid).get().then((snapshot: QuerySnapshot) => {
        key = snapshot.docs[0].data().key;
    });

    console.log("Key", key);
    if (key === "") {
        return { data: {}, message: "User could not be found", code: 400 };
    }
    let count = 0;
    vehicles.map((vehicle)=>{
        vehicle._id = (count++).toString();
        return vehicle;
    })
    return userRef.doc(key).update({ vehicles: vehicles })
    .then(() => {
        return { data: vehicles, message: "Caravans Updated Successfully", code: 200 };
    })
    .catch((error) => {
        return { data: error, message: error.message, code: 400 };
    });

})



module.exports = updatevehicle;