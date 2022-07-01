import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import './index.scss';

const App = () => {
    return (
        <h1>App React 18</h1>
    )
}

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(<App />);