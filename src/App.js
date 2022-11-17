// Core
import {
    Routes, Route, Outlet, Navigate,
}  from 'react-router-dom';

// Components
import { Feed, ProfilePage, PostCommentsPage } from './pages';
import { Footer, Navigation } from './components';

export const App = () => {
    return (
        <>
            <main>
                <div className = 'feed-wrapper'>
                    <div className = 'container'>
                        <Navigation />
                        <Routes>
                            <Route path = '/' element = { <Outlet /> } >
                                <Route path = '/feed' element = { <Feed /> } />
                                <Route path = '/feed/:id' element = { <PostCommentsPage /> } />
                            </Route>
                            <Route path = '/profile' element = { <ProfilePage /> } />
                            <Route path = '*' element = { <Navigate to = '/feed' replace /> } />
                        </Routes>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
