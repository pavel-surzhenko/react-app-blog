export const Comment = (props) => {
    const { author, body, created } = props;

    return (
        <ul>
            <li className = 'commentBody'>
                <p>
                    { author.name }
                    <span>{ created }</span>
                </p>
                <p>{ body }</p>
            </li>
        </ul>
    );
};
