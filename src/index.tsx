// Core
import { Provider }  from 'react-redux';
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';

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
            <HashRouter>
                <App />
            </HashRouter>
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);

