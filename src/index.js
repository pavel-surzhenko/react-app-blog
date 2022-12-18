// Core
import React from 'react';
import { render } from 'react-dom';
import { QueryClientProvider }  from 'react-query';
import { BrowserRouter }  from 'react-router-dom';
import { configure }  from 'mobx';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// App
import { App } from './App';
import { queryClient, StoreProvider } from './lib';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <QueryClientProvider client = { queryClient }>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </QueryClientProvider>,
    document.getElementById('root'),
);
