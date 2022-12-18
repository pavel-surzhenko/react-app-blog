// Core
import {
    Routes, Route, Outlet, Navigate,
}  from 'react-router-dom';
import { useEffect } from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    Feed, ProfilePage, PostCommentsPage, SignUpPage, LoginPage,
} from './pages';
import { Footer, Navigation } from './components';
import { useStore } from './hooks';


export const Home = () => {
    return (
        <div className = 'feed-wrapper'>
            <div className = 'container'>
                <Navigation />
                <Outlet />
            </div>
        </div>
    );
};


export const App = observer(() => {
    const { uiStore } = useStore();
    const { errorMessage, resetError } = uiStore;

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       5000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });

            notify();
            resetError();
        }
    }, [errorMessage]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <main>
                <Routes>
                    <Route path = '/' element = { <Home /> } >
                        <Route path = '/' element = { <Navigate to = '/feed' replace /> } />
                        <Route path = '/feed' element = { <Feed /> } />
                        <Route path = '/feed/:id' element = { <PostCommentsPage /> } />
                        <Route path = '/profile' element = { <ProfilePage /> } />
                    </Route>
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '*' element = { <Navigate to = '/feed' replace /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
});
