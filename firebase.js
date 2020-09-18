import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDrRv8WOZy17UUrq8IrJ2Nn3fa6nwysgMc",
    authDomain: "facebook-clone-a72c4.firebaseapp.com",
    databaseURL: "https://facebook-clone-a72c4.firebaseio.com",
    projectId: "facebook-clone-a72c4",
    storageBucket: "facebook-clone-a72c4.appspot.com",
    messagingSenderId: "412268650204",
    appId: "1:412268650204:web:ac73e86065f495e1fede19",
    measurementId: "G-P4M7378BM9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;




