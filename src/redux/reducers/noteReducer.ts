import { note } from "../../helpers/loadNotes";
import { Action, ActionType, ActiveNote } from "../types";

interface State { 
    notes: note[],
    active: ActiveNote | null
}

const initialState = {
    notes: [],
    active: null
}

const noteReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionType.NOTE_ACTIVE: {
            return {
                ...state,
                active: action.payload
            }
        }
        case ActionType.NOTE_LOAD: {
            return {
                ...state,
                notes: action.payload
            }
        }
        default:
            return state;   
    }

}

export default noteReducer