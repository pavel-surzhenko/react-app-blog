// Core
import {
    Routes, Route, Outlet, Navigate,
}  from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

// Components
import {
    Feed, ProfilePage, PostCommentsPage, SignUpPage, LoginPage, NewPasswordPage,
} from './pages';
import { Footer, Navigation } from './components';
import { useErrorMessage } from './hooks/useErrorMessage';
import { useToken } from './hooks';


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


export const App = () => {
    useErrorMessage();
    // useToken();


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
                        <Route path = '/new-password' element = { <NewPasswordPage /> } />
                    </Route>
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '*' element = { <Navigate to = '/feed' replace /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
};
