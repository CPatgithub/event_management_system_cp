import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEvent, updateEvent } from '../../actions/eventActions';

const EventForm = ({match}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {title, date, description};

         dispatch(addEvent(eventData));
         console.log(eventData)
        navigate('/')
    }

    return (
        <div>
            <h1> Create event</h1>
            <form onSubmit = {handleSubmit}>
                <input
                    type = 'text'
                    placeHolder = 'title'
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <input
                    type = 'date'
                    placeHolder = 'date'
                    value = {date}
                    onChange = {(e) => setDate(e.target.value)}
                />
                 <input
                    type = 'text'
                    placeHolder = 'Descriptioin'
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                />
                <button type = "submit"> {'Create'} </button>
            </form>
        </div>
    )

}

export default EventForm;