import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';
import { googleAuthProvider } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "@firebase/auth";


export const startLoginEmailPassword = (email: string, password: string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_START_LOADING
        })

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {

            const { uid, displayName } = user;

            dispatch({
                type: ActionType.LOGIN,
                payload: {
                    uid, 
                    displayName,
                }
            })

            dispatch({
                type: ActionType.UI_FINISH_LOADING
            })

        })
        .catch((error) => {
            console.log(error.code, error.code)
            dispatch({
                type: ActionType.UI_FINISH_LOADING
            })
        });

    }
}

export const startRegisterNameEmailPassword = (name: string, email: string, password: string) => {
    
    return (dispatch: Dispatch<Action>) => {

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {

            await updateProfile( user, { displayName: name });

            const { uid, displayName } = user;

            dispatch({
                type: ActionType.LOGIN,
                payload: {
                    uid, 
                    displayName,
                }
            })
        })
        .catch((error) => {
            console.log(error.code, error.code)
        });
    }
}

export const startLoginGoogle = () => {
    
    return (dispatch: Dispatch<Action>) => {

        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)      
        .then(({user}) =>{

            const { uid, displayName } = user;

            dispatch({
                type: ActionType.LOGIN,
                payload: {
                    uid, 
                    displayName,
                }
            })

        })
        .catch((error) => {
            console.log(error.code, error.code)
        });

    }
}