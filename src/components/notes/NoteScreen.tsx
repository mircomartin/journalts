import React from 'react';
import { NoteAppbar } from './NoteAppbar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NoteAppbar />
			<div className="notes__content">
				<input
					type="text"
					name=""
					className="notes__title-input"
					placeholder="Some awsome title"
				/>
				<textarea
					name=""
					placeholder="What happened today?"
					className="notes__textarea"
				></textarea>
				<div className="notes__image">
					<img
						src="https://img.wallpapersafari.com/desktop/1920/1080/7/8/dObGw3.jpg"
						alt="Surfing"
					/>
				</div>
			</div>
		</div>
	);
};
