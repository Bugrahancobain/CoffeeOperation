// src/lib/firebaseAdmin.js
import admin from "firebase-admin";
import serviceAccount from "./config/serviceAccountKey.json";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
}

const db = admin.database();
export { db };
