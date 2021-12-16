import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { notesActions, State } from "../../redux";

export const NoteAppbar = () => {

    const dispatch = useDispatch();
    const { startSaveNote } = bindActionCreators(notesActions, dispatch);
	const { active } = useSelector((state: State) => state.note );

    const handleSave = ():void => {

        startSaveNote(active)

    }

    return (
        <div className="notes__appbar">
            <span>28 agosto 2020</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
