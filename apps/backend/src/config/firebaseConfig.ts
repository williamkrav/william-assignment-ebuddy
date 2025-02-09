import admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config(); 
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT as string);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


export const db = admin.firestore();
export const auth = admin.auth();
