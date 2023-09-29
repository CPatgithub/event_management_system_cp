// import {createStore, applyMiddleware} from 'react-redux';
import { combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import eventReducer from './reducers/eventReducer';
import rsvpReducer from './reducers/rsvpReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    rsvps: rsvpReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;