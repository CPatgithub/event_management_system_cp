import {firestore} from '../firebase';

export const addEvent = (eventData) => {
    return {
        type: 'ADD_EVENT',
        payload: eventData
    }
};

export const getEvents = (eventData) => {
};

export const getEvent = (eventData) => {
};

export const updateEvent = (eventData) => {
};

export const deleteEvent = (eventData) => {
};