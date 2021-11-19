
export enum ActionType {
    LOGIN = "Login",
    LOGOUT = "Logout",

    UI_SET_ERROR = "UI_SetError",
    UI_REMOVE_ERROR = "UI_RemoveError",
    UI_START_LOADING = "UI_StartLoading",
    UI_FINISH_LOADING = "UI_FinishLoading",

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

export type Action = Login | Logout | SetError | RemoveError | StartLoading | FinishLoading