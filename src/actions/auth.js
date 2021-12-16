
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                // Signed in
                dispatch(login(user.uid,user.displayName));
                dispatch(finishLoading())
           
                // ...
            })
            .catch((error) => {
               
                console.log(error)
                dispatch(finishLoading())
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
                console.log(user); //user devuelve un objeto
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

//googleSignIn
export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)