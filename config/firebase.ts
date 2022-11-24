import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBibjcV-OpHC09Tg9hbO3orAafQM6KrfGo",
  authDomain: "hyo-genie-blog.firebaseapp.com",
  projectId: "hyo-genie-blog",
  storageBucket: "hyo-genie-blog.appspot.com",
  messagingSenderId: "460405771550",
  appId: "1:460405771550:web:6e861e1903e296fe2ecd0f",
  measurementId: "G-KQQFGJD0RD",
  databaseURL: "https://hyo-genie-blog-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
