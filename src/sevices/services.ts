import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export const loginWithEmail: (mail: string, password: string) => Promise<User | null> = (mail: string, password: string) => {
    const auth = getAuth();


    return signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem("user_logged", JSON.stringify(user))
            return user
        })
        .catch((error) => {
            return null
        });
}

export const createUser: (mail: string, password: string) => Promise<User | null> = (email: string, password: string) => {
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem("user_logged", JSON.stringify(user))
            return user
        })
        .catch((error) => {
            return null
        });
}

export const getServices = () => {
    const dbRef = ref(getDatabase());

    return get(child(dbRef, `services`))
}
