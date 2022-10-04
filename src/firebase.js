import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0QnyUJB8aCmQPp7xEYIf3PevS542FiTc",
    authDomain: "disney-cfc6b.firebaseapp.com",
    projectId: "disney-cfc6b",
    storageBucket: "disney-cfc6b.appspot.com",
    messagingSenderId: "631872162599",
    appId: "1:631872162599:web:9fb408725c7553025af702",
    measurementId: "G-GWL7TBKQSY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
