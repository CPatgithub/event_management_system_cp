import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import {useNavigate} from "react-router-dom"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const EventList = () => {
    const dispatch = useDispatch();
    const {events=[]} = useSelector((state) => state.events);
    const navigate = useNavigate()

    console.log(events)

    // useEffect(() => {
    //     dispatch(getEvents());
    // }, [dispatch]);

    const handleEventCreate = () => {
        navigate('/create-event')
    }

    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/signin");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div>
            <h1>Events List</h1>
            {
                events?.map((event) => (
                    <div>
                        <h2>{event.title}</h2>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))
            }

            <button onClick={handleEventCreate}>create event</button>
            <button onClick={handleLogout}>sign out</button>
        </div>
    )

}

export default EventList;