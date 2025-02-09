import { initializeApp } from 'firebase/app';
import * as dotenv from "dotenv";
import { getAuth } from 'firebase/auth';
dotenv.config(); 
const firebaseConfig = JSON.parse(process.env.FIREBASE_CREDENTIALS as string);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
