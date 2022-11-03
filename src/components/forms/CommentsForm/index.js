
export const CommentsForm = () => {
    return (
        <>
            <form className = 'commentForm'>
                <img
                    src = 'https://placeimg.com/256/256/animals' alt = 'avatar'
                    className = 'comment-avatar'></img>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <input
                        placeholder = 'Comments...' type = 'text'
                        name = 'body'></input>
                </label>
                <button type = 'submit'>Comment</button>
            </form>
            <hr className = 'separator'></hr>
        </>
    );
};
