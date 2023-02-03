// core
import { NavLink } from 'react-router-dom';
import { useLogOut, useProfile } from '../../hooks';


export const Navigation = () => {
    const profile = useProfile();
    const logOut = useLogOut();

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = ''
                        className = 'navigation-avatar'></img>
                    <div className = 'user-status'>
                        <div className = 'status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                { profile.data?.name }
            </div>
            <NavLink to = '/profile' className = 'navigation-item'>
                Profile
            </NavLink>
            <NavLink to = '/feed' className = 'navigation-item'>
                Wall
            </NavLink>
            <button className = 'logout' onClick = { () => logOut.mutate() }>
                Log out
            </button>
        </div>
    );
};
