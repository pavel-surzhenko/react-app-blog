export const Navigation = () => {
    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals' alt = ''
                        className = 'navigation-avatar'></img>
                    <div className = 'user-status'>
                        <div className = 'status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                Chuck Norris
            </div>
            <a
                activeclassname = 'active' className = 'navigation-item'
                href = '/rtx-homeworks/profile'>Profile</a>
            <a
                activeclassname = 'active' aria-current = 'page'
                className = 'navigation-item active' href = '/rtx-homeworks/feed'>Wall</a>
            <button className = 'logout'>Log out</button>
        </div>
    );
};
