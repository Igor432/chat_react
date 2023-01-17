
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";


const connectFireBase = async() => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
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