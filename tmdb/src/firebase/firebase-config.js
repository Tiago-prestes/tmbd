import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
// import { collection, addDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_8DBD7UOo6ej9Rhimz_fSpS15IPsrgMw",
  authDomain: "favoritestmdb.firebaseapp.com",
  projectId: "favoritestmdb",
  storageBucket: "favoritestmdb.appspot.com",
  messagingSenderId: "192030117470",
  appId: "1:192030117470:web:a785ac44d1253ab93d2ecf",
  measurementId: "G-CX4JSWKF0G"
}//Adicionar apiKey para .env

const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

// const UidCollectionRef = collection(db, 'users', `${uid}`)

// export const getCurrentUserData = async () => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   console.log('You are' + user)
//   const uid = user.uid
//   const userDocumentRef = doc(db,  (`users/${uid}`) )
//   addDoc(userDocumentRef, { uid })
// } //tentativa de criar o usuario com documendo como ID*
