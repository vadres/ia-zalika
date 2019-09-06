import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZ3X9BaXvFCcsMManS9wFSL0xGBaUgijg",
  authDomain: "ia-zalika.firebaseapp.com",
  databaseURL: "https://ia-zalika.firebaseio.com",
  projectId: "ia-zalika",
  storageBucket: "ia-zalika.appspot.com",
  messagingSenderId: "996926696944",
  appId: "1:996926696944:web:ac9154349f45329f51c135"
});

const db = firebaseApp.firestore();

export { db };
