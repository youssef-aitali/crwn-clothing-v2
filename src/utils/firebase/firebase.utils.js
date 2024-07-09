import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7bjQ7b-WueWUzd5Ihh-fKVJwmF45wo7Q",
  authDomain: "crwn-clothing-2dc7e.firebaseapp.com",
  projectId: "crwn-clothing-2dc7e",
  storageBucket: "crwn-clothing-2dc7e.appspot.com",
  messagingSenderId: "688556010636",
  appId: "1:688556010636:web:fdc2ca48a59adedcf19fa9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
