import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './containers/reducers';
import App from './views/App';
import './index.css';

const apiBaseURL = 'http://localhost:8080/'

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

const parseJSON = (response) => {
    return response.json()
}

const loadData = () => {
    window.fetch(apiBaseURL + '/spaces')
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            console.log( data );
            let store = createStore( reducers, {spaces: data, spaceForm: {id:'', name:'', memory_quotamb:'', disk_quotamb: '' }} );

            ReactDOM.render(
                <Provider store={store} >
                    <App />
                </Provider>,
                document.getElementById('root')
            )
        })
        .catch((error) => {
            console.log('request failed', error)
        })
}

window.onload = () => {
    loadData()
}
