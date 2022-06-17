import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginWithEmail = (mail: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        });
}