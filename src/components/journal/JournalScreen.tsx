import { useSelector } from "react-redux";
import { State } from "../../redux";
import { NoteScreen } from "../notes/NoteScreen"
import { NothingSelected } from "./NothingSelected"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {

    const { active } = useSelector((state: State) => state.note );


    return (
        <div className="journal__main-content">

            <Sidebar/>

            <main>

                {
                    (active)
                        ? <NoteScreen/>
                        : <NothingSelected/>
                }

            </main>

        </div>
    )
}
