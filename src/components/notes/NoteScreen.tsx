import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notesActions, State } from '../../redux';
import { NoteAppbar } from './NoteAppbar';
import { note } from '../../helpers/loadNotes';
import { bindActionCreators } from 'redux';

export const NoteScreen = () => {

	const { active } = useSelector((state: State) => state.note );
	const dispatch = useDispatch();
    const { activeNote, startDeleteNote } = bindActionCreators(notesActions, dispatch);

	const activeId = useRef(active.id)

	const [note, setNote] = useState<note>(active)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ):void => {

		setNote({
			...active,
            [e.target.name]:e.target.value
		})

	}

	useEffect(() => {

		if(active.id !== activeId.current){
			setNote(active)
			activeId.current = active.id
		}

	}, [active])

	useEffect(() => {

		activeNote(note)
		
	}, [note])

	const handleDelete = ():void => {

		startDeleteNote(active.id)

	}

	return (
		<div className="notes__main-content">

			<NoteAppbar />

			<div className="notes__content">
				<input
					type="text"
					name="title"
					className="notes__title-input"
					placeholder="Some awsome title"	
					onChange={handleInputChange}
					value={note.title}
				/>
				<textarea
					name="body"
					placeholder="What happened today?"
					className="notes__textarea"
					onChange={handleInputChange}
					value={note.body}
				></textarea>
				<div className="notes__image">
					<img
						src="https://img.wallpapersafari.com/desktop/1920/1080/7/8/dObGw3.jpg"
						alt="Surfing"
					/>
				</div>
			</div>

			<button
				className='btn btn-danger'
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	);
};
