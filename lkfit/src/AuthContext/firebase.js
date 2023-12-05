import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlklthRocQsT-8jNhJ9INb0gNZzyespmE",
    authDomain: "lkfit-22235.firebaseapp.com",
    projectId: "lkfit-22235",
    storageBucket: "lkfit-22235.appspot.com",
    messagingSenderId: "1095550245332",
    appId: "1:1095550245332:web:db44f4015914cd71055e41",
    measurementId: "G-ZB85PR30WM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);