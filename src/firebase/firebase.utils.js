import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDe1B1gZM3snezmcZckYKX_ga8IDqlNgPw",
    authDomain: "shopping-app-f6fc6.firebaseapp.com",
    databaseURL: "https://shopping-app-f6fc6.firebaseio.com",
    projectId: "shopping-app-f6fc6",
    storageBucket: "shopping-app-f6fc6.appspot.com",
    messagingSenderId: "335001848026",
    appId: "1:335001848026:web:f3993ac2eb33fc1cbdfde3",
    measurementId: "G-BQVC7P57QR"
  };
export const createUserProtofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnap = await userRef.get();

  if(!userSnap.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
    }catch(error){
        console.log('error creating: '+ error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;