import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_WxcQd7vQnG7tWtBkbQWBlSMn8q1vkRA",
    authDomain: "crwn-db-c0b34.firebaseapp.com",
    databaseURL: "https://crwn-db-c0b34.firebaseio.com",
    projectId: "crwn-db-c0b34",
    storageBucket: "crwn-db-c0b34.appspot.com",
    messagingSenderId: "511784218159",
    appId: "1:511784218159:web:dedb54bcec2fd53240a0da",
    measurementId: "G-SNT07NNQ4C"
};

export const createUserProfileDocument  = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;


}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;