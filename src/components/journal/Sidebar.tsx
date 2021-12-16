import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { bindActionCreators } from "redux"
import { authActions, notesActions, State } from "../../redux"
import { JournalEntries } from "./JournalEntries"

export const Sidebar = () => {

    const history = useHistory()

    const dispatch = useDispatch()
    const { startLogout } = bindActionCreators(authActions, dispatch)
    const { startNewNote } = bindActionCreators(notesActions, dispatch)

    const { name } = useSelector((state: State) => state.auth );

    const handleAddNew = () => {
        startNewNote()
    }


    const handleLogout = ():void => {

        startLogout()
        history.push("/auth/login")
        
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar mt-5">
                <h3 className="">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>

            <div className="journal__new-entry" onClick={handleAddNew}>
                <i className="far fa-calendar-plus fa-5x mb-5"></i>
                <p>New entry</p>
            </div>

            <JournalEntries/>

        </aside>
    )
}
