import { note } from '../../helpers/loadNotes';
import { Action, ActionType } from "../types";

interface State { 
    notes: note[],
    active: note | any
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
                notes: [...action.payload]
            }
        }
        case ActionType.NOTE_ADD_NEW: {
            return {
                ...state,
                notes: [action.payload,...state.notes]
            }
        }
        case ActionType.NOTE_UPDATE: {
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload
                        : note
                )
            }
        }
        case ActionType.NOTE_DELETE: {
            return {
                ...state,
                notes: state.notes.filter( note => note.id !== action.payload ),
                active: null
            }
        }
        case ActionType.NOTE_CLEANING: {
            return {
                notes: [],
                active: null
            }
        }
        default:
            return state;   
    }

}

export default noteReducer