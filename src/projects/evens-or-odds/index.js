import React from 'react';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));


// store.subscribe(()=> console.log('store.getState()', store.getState()));

// console.log('store', store);
// console.log('store.getState()', store.getState())

// store.dispatch(startGame());
// store.dispatch(expandInstructions());

// store.dispatch(cancelGame());
// store.dispatch(cancelInstructions());


const EvensOrOdds = () => {
    return(
        <Provider store={store}>
                <App />
                </Provider>
    )
};

export default EvensOrOdds;