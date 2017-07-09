import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDp64pXMIit14GAPcsfCMUK_l1G_enrZrM",
  authDomain: "portfolio-9274c.firebaseapp.com",
  databaseURL: "https://portfolio-9274c.firebaseio.com",
  storageBucket: "portfolio-9274c.appspot.com",
};
firebase.initializeApp(config);
export default firebase;