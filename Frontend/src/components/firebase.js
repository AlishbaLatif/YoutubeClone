

import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDDLOUIyyinfTtyl4O0aK8hmngZWU_lVes",
    authDomain: "yt-clone2197.firebaseapp.com",
    projectId: "yt-clone2197",
    storageBucket: "yt-clone2197.appspot.com",
    messagingSenderId: "364852086793",
    appId: "1:364852086793:web:df26775b14ee687f5910d8"
  };


export const firebaseApp=initializeApp(firebaseConfig);
  export const auth=getAuth(firebaseApp);
