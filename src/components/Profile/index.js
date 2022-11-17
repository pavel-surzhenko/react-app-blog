export const Profile = () => {
    return (
        <div>
            <h1>`Hi, Chuck Norris`</h1>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
            <label>
                <div>
                    <span className = 'error-message'></span>
                </div>
                <input placeholder = 'Name' type = 'text' />
            </label>
            <label>
                <div>
                    <span className = 'error-message'></span>
                </div>
                <input placeholder = 'Last name' type = 'text' />
            </label>
            <button className = 'loginSubmit' type = 'submit'>Update profile</button>
        </div>
    );
};
