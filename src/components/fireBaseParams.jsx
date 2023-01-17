
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";


const connectFireBase = async() => {
    const firebaseConfig = {
        apiKey: "AIzaSyAA7ULFxIEBHmul3YBr6uYZaOk4z0cXefk",
        authDomain: "fir-db473.firebaseapp.com",
        projectId: "fir-db473",
        storageBucket: "fir-db473.appspot.com",
        messagingSenderId: "354704188068",
        appId: "1:354704188068:web:e50687c6fe99a50a62bc31",
    };


    const app = initializeApp(firebaseConfig);
    const db = initializeFirestore(app, {useFetchStreams: false,  experimentalForceLongPolling: true })
    console.log('FireBaseConnected')
return db
    
}

export default connectFireBase



/*



rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

*/