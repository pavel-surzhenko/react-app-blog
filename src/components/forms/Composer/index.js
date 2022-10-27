export const Composer = () => {
    return (
        <section className = 'composer'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar'></img>
            <form>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <textarea placeholder = "What's on your mind, Chuck Norris?" name = 'body'></textarea>
                </label>
                <button type = 'submit'>post</button>
            </form>
        </section>
    );
};
