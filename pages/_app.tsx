import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBibjcV-OpHC09Tg9hbO3orAafQM6KrfGo",
  authDomain: "hyo-genie-blog.firebaseapp.com",
  projectId: "hyo-genie-blog",
  storageBucket: "hyo-genie-blog.appspot.com",
  messagingSenderId: "460405771550",
  appId: "1:460405771550:web:6e861e1903e296fe2ecd0f",
  measurementId: "G-KQQFGJD0RD",
};

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return <Component {...pageProps} />;
}

export default MyApp;
