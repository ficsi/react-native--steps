import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJzd5c6C6mKHsax1VLKOektZKOB3zIElo",
    authDomain: "steps-7e02a.firebaseapp.com",
    databaseURL: "https://steps-7e02a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "steps-7e02a",
    storageBucket: "steps-7e02a.appspot.com",
    messagingSenderId: "791860887526",
    appId: "1:791860887526:web:d452228ca954bd21532027"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth()
export const database = getFirestore();