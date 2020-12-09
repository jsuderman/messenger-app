import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZ0YAg2vrE3u97YoxYFibgWq_PvNCZ4tg",
    authDomain: "messenger-app-1c5f2.firebaseapp.com",
    projectId: "messenger-app-1c5f2",
    storageBucket: "messenger-app-1c5f2.appspot.com",
    messagingSenderId: "876520428080",
    appId: "1:876520428080:web:c32c7013916728e49953f5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;