import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { note } from '../../helpers/loadNotes';
import { notesActions } from '../../redux';

const moment = require('moment');

export const JournalEntry = ({ id, date, title, body }:note) => {

    const dispatch = useDispatch();
    const { activeNote } = bindActionCreators(notesActions, dispatch);
    const noteDate = moment(date)

    const handleEntryClick = ():void => {

        activeNote({id, date, title, body})

    }

    return (
        <div className="journal__entry pointer" onClick={handleEntryClick}>

            <div className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1920/1080/7/8/dObGw3.jpg)'
            }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>

        </div>
    )
}
