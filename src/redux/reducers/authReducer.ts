import { Action, ActionType } from "../types";

interface State { 
}

const initialState = {
}

const authReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionType.LOGIN:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case ActionType.LOGOUT:
            return {}
        default:
            return state;   
    }

}

export default authReducer