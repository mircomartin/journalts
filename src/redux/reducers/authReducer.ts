import { Action, ActionType } from "../types";

interface State { 
    checking: boolean,
    logged: boolean,
}

const initialState = {
    checking: true,
    logged: false,
}

const authReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionType.LOGIN:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case ActionType.LOGOUT:
            return {}
        case ActionType.CHECKING:
            return {
                ...state,
                checking: false,
            }
        case ActionType.LOGGED:
            return {
                ...state,
                logged: true,
            }
        case ActionType.UNLOGGED:
            return {
                ...state,
                logged: false,
            }
        default:
            return state;   
    }

}

export default authReducer