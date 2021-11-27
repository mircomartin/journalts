import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';
import { googleAuthProvider } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "@firebase/auth";
import Swal from 'sweetalert2'


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
        .catch((e) => {
            console.log(e)
            dispatch({
                type: ActionType.UI_FINISH_LOADING
            })
            Swal.fire('Error', e.message, 'error')
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
        .catch((e) => {
            console.log(e)
            Swal.fire('Error', e.message, 'error')
        });
    }
}

export const startLogout = () => {
    
    return async (dispatch: Dispatch<Action>) => {

        const auth = getAuth();

        signOut(auth)

        dispatch({
            type: ActionType.LOGOUT
        })
        
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

export const setChecking = () => {
    
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.CHECKING
        })

    }
}

export const setLogged = () => {
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.LOGGED
        })

    }
}

export const unLogged = () => {
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UNLOGGED
        })

    }
}