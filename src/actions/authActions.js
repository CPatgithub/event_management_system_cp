import {auth} from '../firebase';

export const signIn = (username, password) => {
    return auth.signInWithEmailAndPassword(username, password);
};

export const signOut = () => {
    return auth.signOut();
};