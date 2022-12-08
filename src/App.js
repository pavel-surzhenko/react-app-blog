// Core
import {
    Routes, Route, Outlet, Navigate,
}  from 'react-router-dom';

// Components
import {
    Feed, ProfilePage, PostCommentsPage, SignUpPage,
} from './pages';
import { Footer, Navigation } from './components';


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
    return (
        <>
            <main>
                <Routes>
                    <Route path = '/' element = { <Home /> } >
                        <Route path = '/feed' element = { <Feed /> } />
                        <Route path = '/feed/:id' element = { <PostCommentsPage /> } />
                        <Route path = '/profile' element = { <ProfilePage /> } />
                    </Route>
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route path = '*' element = { <Navigate to = '/feed' replace /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
};
