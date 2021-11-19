import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';

export const setErrorAction = (err: string) => {
    
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_SET_ERROR,
            payload: err,
        })
        
    }
}

export const removeErrorAction = () => {
    
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_REMOVE_ERROR,
        })
        
    }
}

export const startLoadingAction = () => {
    
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_START_LOADING
        })
        
    }
}

export const finishLoadingAction = () => {
    
    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_FINISH_LOADING
        })
        
    }
}