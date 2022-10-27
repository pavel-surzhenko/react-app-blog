// Core
import React from 'react';
import { render } from 'react-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// App
import { App } from './App';

render(
    <>
        <App />
    </>,
    document.getElementById('root'),
);
