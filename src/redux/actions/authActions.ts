import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';
import { googleAuthProvider } from "../../firebase/firebase-config";
import { getAuth, signInWithPopup } from "@firebase/auth";


export const startLoginEmailPassword = (email: string, password: string) => {
    
    return async (dispatch: Dispatch<Action>) => {

/*         dispatch({
            type: ActionType.LOADING_START,
            payload: true
        }) */

        try {

            /* dispatch({
                type: ActionType.LOGIN,
                payload: {
                    
                }
            }) */
            
            
                
        } catch (error) {
            console.log(error)
        }
    }
}

export const startLoginGoogle = () => {
    
    return async (dispatch: Dispatch<Action>) => {

/*         dispatch({
            type: ActionType.LOADING_START,
            payload: true
        }) */

        try {

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

            });

            
        } catch (error) {
            console.log(error)
        }
    }
}