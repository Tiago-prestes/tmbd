import { auth, provider } from "../firebase/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const profilePic = res.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      }).catch((err) => {
        console.log(err)
      })
  }

export const Logout = () => {
    signOut(auth)
    localStorage.clear()
  }