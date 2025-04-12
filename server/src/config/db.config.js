import admin from "firebase-admin";
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

if (!db) {
  console.log('❌ Firebase initialization failed');
} else {
  console.log('✅ Firebase initialized');
}

export default db;
