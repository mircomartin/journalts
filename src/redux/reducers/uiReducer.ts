import { Action, ActionType } from "../types";

interface State { 
    loading: boolean,
    msg: string,
}

const initialState = {
    loading: false,
    msg: '',
}

const uiReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionType.UI_SET_ERROR: {
            return {
                ...state,
                msg: action.payload
            }
        }
        case ActionType.UI_REMOVE_ERROR: {
            return {
                ...state,
                msg: '',
            }
        }
        case ActionType.UI_START_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case ActionType.UI_FINISH_LOADING: {
            return {
                ...state,
                loading: false,
            }
        }
        default:
            return state;   
    }

}

export default uiReducer