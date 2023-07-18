
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDlzvJd3XcuZkqjq4gHwDqZZ1yJX3ql9Sc",
  authDomain: "empanamia-1ed0e.firebaseapp.com",
  projectId: "empanamia-1ed0e",
  storageBucket: "empanamia-1ed0e.appspot.com",
  messagingSenderId: "305128052665",
  appId: "1:305128052665:web:e00ebcd432cec6f36d0868",
  measurementId: "G-QDHDW0RRNY"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
