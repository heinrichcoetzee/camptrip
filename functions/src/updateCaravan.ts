import * as functions from 'firebase-functions';
import { Firestore, QuerySnapshot } from '@google-cloud/firestore';
import { ICaravan } from '../../src/app/shared/ICaravan.interface';

const updatecaravan = functions.https.onCall(async (caravans: Array<ICaravan>, context) => {
    const uid = context && context.auth ? context.auth.uid : '';
    console.log("User", caravans)
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
    caravans.map((caravan)=>{
        caravan._id = (count++).toString();
        return caravan;
    })
    return userRef.doc(key).update({ caravans: caravans })
    .then(() => {
        return { data: caravans, message: "Caravans Updated Successfully", code: 200 };
    })
    .catch((error) => {
        return { data: error, message: error.message, code: 400 };
    });

})



module.exports = updatecaravan;