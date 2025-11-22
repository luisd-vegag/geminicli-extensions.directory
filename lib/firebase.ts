import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDBvIpK3xbaeMk9w1-ziqQVMg88R4911Rk",
    authDomain: "geminicli-extensions-directory.firebaseapp.com",
    projectId: "geminicli-extensions-directory",
    storageBucket: "geminicli-extensions-directory.firebasestorage.app",
    messagingSenderId: "355988373816",
    appId: "1:355988373816:web:ac6f00984a8b45e6b181cd",
    measurementId: "G-SLQWNJL53M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, auth, googleProvider, analytics };
