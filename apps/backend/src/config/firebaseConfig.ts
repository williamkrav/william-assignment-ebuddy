  import admin from "firebase-admin";
import * as dotenv from "dotenv";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
dotenv.config(); 
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT as string);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId:"e-buddy-technical-test-51cdb",
});

if (process.env.NODE_ENV === "development") {
  const firestoreHost = "localhost:8080";  

  admin.firestore().settings({
    host: firestoreHost,
    ssl: false,  
  });

  firebase.auth().useEmulator("http://localhost:9099"); 
}

export const db = admin.firestore();
export const auth = admin.auth();
