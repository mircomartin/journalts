import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';
import Swal from 'sweetalert2'
import { State } from "..";
import { db } from "../../firebase/firebase-config";
import { addDoc, collection } from "@firebase/firestore";
import { note } from "../../helpers/loadNotes";


export const startNewNote = () => {

    return async (dispatch: Dispatch<Action>, getState: () => State) => {

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {

            const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
            const { id } = docRef

            const note = {
                id: id,
                title: newNote.title,
                body: newNote.body,
                date: newNote.date
            }

            dispatch({
                type: ActionType.NOTE_ACTIVE,
                payload: {...note}
            })

          } catch (e) {

            console.log(e)

        }

    }
}

export const startLoadNotes = (notes: note[]) => {

    return (dispatch: Dispatch<Action>) => {

        try {

            dispatch({
                type: ActionType.NOTE_LOAD,
                payload: notes
            })

          } catch (e) {

            console.log(e)

        }

    }
}