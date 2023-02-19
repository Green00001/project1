import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import "dotenv/config"

const app = initializeApp({
    credential: cert(process.env.FIREBASE_CREDENTIAL["service_account_key"]),
});



const auth = getAuth(app);
export default auth;