import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";

export interface note {
    id: string,
    date: number,
    title: string,
    body: string,
    url?: string
}
 
export const loadNotes = async (uid: string) => {
 
    const notesSnap = await getDocs(query(collection(db, `${ uid }/journal/notes`)));
    const notes: note[] = []
 
    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            date: snapHijo.data().date,
            title: snapHijo.data().title,
            body: snapHijo.data().body,
            url: snapHijo.data().url
        })
      });
 
    return notes;
};