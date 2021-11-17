import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyApbt1uwgAS8eOLM4DsXkfsiK6cGOxEsGU",
    authDomain: "seb-s-skateshop.firebaseapp.com",
    projectId: "seb-s-skateshop",
    storageBucket: "seb-s-skateshop.appspot.com",
    messagingSenderId: "253104976034",
    appId: "1:253104976034:web:9bd0e8c48a94ede999e7fb"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}