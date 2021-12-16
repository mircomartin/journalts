import { Dispatch } from "redux"
import { Action } from "../types"
import { ActionType } from '../types/index';
import { State } from "..";
import { db } from "../../firebase/firebase-config";
import { addDoc, collection, updateDoc, doc, deleteDoc } from "@firebase/firestore";
import { note, loadNotes } from '../../helpers/loadNotes';
import Swal from "sweetalert2";


export const startNewNote = () => {

    return async (dispatch: Dispatch<Action>, getState: () => State) => {

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        }

        try {

            const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
            const { id } = docRef

            const note = {
                id: id,
                title: newNote.title,
                body: newNote.body,
                date: newNote.date,
                url: newNote.url
            }

            dispatch({
                type: ActionType.NOTE_ACTIVE,
                payload: {...note}
            })

            dispatch({
                type: ActionType.NOTE_ADD_NEW,
                payload: note
            })

          } catch (e) {

            console.log(e)

        }

    }
}

export const startLoadingNotes = (uid: string) => {

    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.UI_START_LOADING
        })

        try {

            const notes = await loadNotes(uid)

            dispatch({
                type: ActionType.NOTE_LOAD,
                payload: notes
            })

            dispatch({
                type: ActionType.UI_FINISH_LOADING
            })

          } catch (e) {

            console.log(e)
            dispatch({
                type: ActionType.UI_FINISH_LOADING
            })

        }

    }
}

export const activeNote = (note: note) => {

    return (dispatch: Dispatch<Action>) => {

        try {

            dispatch({
                type: ActionType.NOTE_ACTIVE,
                payload: note
            })

          } catch (e) {

            console.log(e)

        }

    }

}

export const startSaveNote = (note: note) => {

    return async (dispatch: Dispatch<Action>, getState: () => State) => {

        const { uid } = getState().auth

        try {

            if(!note.url){
                delete note.url
            }
           
            const noteToFirestore = {...note}

            const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
            await updateDoc(noteRef, noteToFirestore);

            dispatch({
                type: ActionType.NOTE_UPDATE,
                payload: note
            })

            Swal.fire('Saved', note.title , 'success')

          } catch (e) {

            console.log(e)

        }

    }

}

export const startDeleteNote = (id: string) => {

    return async (dispatch: Dispatch<Action>, getState: () => State) => {

        const { uid } = getState().auth

        try {
           
            const noteRef = doc(db, `${uid}/journal/notes/${id}`)
            await deleteDoc(noteRef);

            dispatch({
                type: ActionType.NOTE_DELETE,
                payload: id
            })

            Swal.fire('Deleted','success')

          } catch (e) {

            console.log(e)

        }

    }

}