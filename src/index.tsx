import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
import App from './App';

const config = {
    apiKey: "AIzaSyDuah5L-rgG9BROdkhSjvv5wgLm00hy1fM",
    authDomain: "render-app-db8a2.firebaseapp.com",
    projectId: "render-app-db8a2",
    storageBucket: "render-app-db8a2.appspot.com",
    messagingSenderId: "888087288118",
    appId: "1:888087288118:web:2ce2b81500623ab76dbb97"
}

firebase.initializeApp(config);

ReactDOM.render(
    <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>,
    document.getElementById('root')
);

