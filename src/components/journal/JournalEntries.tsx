import { useSelector } from 'react-redux';
import { State } from '../../redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
	const { notes } = useSelector((state: State) => state.note);
	const { loading } = useSelector((state: State) => state.ui);

	return (
		<div className="journal__entries">
			{!loading ? (
				notes.length > 0 ? (
					notes?.map((note) => (
						<JournalEntry
							key={note.id}
							date={note.date}
							title={note.title}
							body={note.body}
							id={note.id}
						/>
					))
				) : (
					<p>No hay notas creadas!</p>
				)
			) : (
				<p>Cargando...</p>
			)}
		</div>
	);
};
