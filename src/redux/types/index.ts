import { note } from "../../helpers/loadNotes";

export enum ActionType {
    LOGIN = "Login",
    LOGOUT = "Logout",
    CHECKING = "Checking",
    LOGGED = "Logged",
    UNLOGGED = "Unlogged",

    UI_SET_ERROR = "UI_SetError",
    UI_REMOVE_ERROR = "UI_RemoveError",
    UI_START_LOADING = "UI_StartLoading",
    UI_FINISH_LOADING = "UI_FinishLoading",

    NOTE_ADD_NEW = "NOTE_AddNew",
    NOTE_ACTIVE = "NOTE_ActiveNote",
    NOTE_LOAD = "NOTE_LoadNotes",
    NOTE_UPDATE = "NOTE_UpdateNote",
    NOTE_FILEURL = "NOTE_FileUrl",
    NOTE_DELETE = "NOTE_DeleteNote",
    NOTE_LOGOUT = "NOTE_LogOut"



}

/* Auth Types */

export interface Login {
    type: "Login",
    payload: { uid: string, displayName: string | null },
}

export interface Logout {
    type: "Logout",
    payload?: string,
}

export interface SetChecking {
    type: "Checking",
}

export interface Logged {
    type: "Logged",
}

export interface Unlogged {
    type: "Unlogged",
}

/* UI Types */

export interface SetError {
    type: "UI_SetError",
    payload: string,
}

export interface RemoveError {
    type: "UI_RemoveError",
}

export interface StartLoading {
    type: "UI_StartLoading",
}

export interface FinishLoading {
    type: "UI_FinishLoading",
}

/* Note Types */
export interface AddNewNote {
    type: "NOTE_AddNew",
    payload: {
        id: string,
        title: string,
        body: string,
        date: number
    }
}

export interface ActiveNote {
    type: "NOTE_ActiveNote"
    payload:  {
        id: string,
        title: string,
        body: string,
        date: number,
    },
}

export interface LoadNotes {
    type: "NOTE_LoadNotes"
    payload:  note[]
}

export type Action = Login | Logout | SetChecking | SetError | RemoveError | StartLoading | FinishLoading | Logged | Unlogged | AddNewNote | ActiveNote | LoadNotes