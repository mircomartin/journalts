
export enum ActionType {
    LOGIN = "Login",
    LOGOUT = "Logout",

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




export type Action = Login | Logout