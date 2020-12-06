import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzYovFRnU7UIS91G-59HI5J3i_r5R-ydc",
    authDomain: "freefall-7f2f0.firebaseapp.com",
    projectId: "freefall-7f2f0",
    storageBucket: "freefall-7f2f0.appspot.com",
    messagingSenderId: "614462200271",
    appId: "1:614462200271:web:383c983d78f0dbe9ff1aba",
    measurementId: "G-FSFMPMB0SW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
