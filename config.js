import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyCt4wm469ZGTLZaWT7VFsq1eH8jRfe5LMs",
  authDomain: "barter-system-e466f.firebaseapp.com",
  projectId: "barter-system-e466f",
  storageBucket: "barter-system-e466f.appspot.com",
  messagingSenderId: "19974194619",
  appId: "1:19974194619:web:7d73df2c2ee20a530ef09e"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()