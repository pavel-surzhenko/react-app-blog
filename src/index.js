// Core
import React from 'react';
import { Provider }  from 'react-redux';
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import { store }  from './lib/redux/init/store';

// App
import { App } from './App';
import { queryClient } from './lib';

render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);

