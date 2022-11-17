// Core
import React from 'react';
import { render } from 'react-dom';
import { QueryClientProvider }  from 'react-query';
import { BrowserRouter }  from 'react-router-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// App
import { App } from './App';
import { CommentsFormProvider, queryClient } from './lib';

render(
    <QueryClientProvider client = { queryClient }>
        <CommentsFormProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CommentsFormProvider>
    </QueryClientProvider>,
    document.getElementById('root'),
);
