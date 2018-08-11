import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore);


ReactDOM.render( <Provider store = { store(reducer) } >
                    <App/>
                </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();