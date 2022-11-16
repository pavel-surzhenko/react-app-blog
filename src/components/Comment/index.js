import { formatDistance } from 'date-fns';

export const Comment = (props) => {
    const { author, body, created } = props;

    const relatedDate = formatDistance(
        new Date(created),
        new Date(), {
            addSuffix:      true,
            includeSeconds: true,
        },
    );

    return (
        <ul>
            <li className = 'commentBody'>
                <p>
                    { author.name }
                    <span>{ relatedDate }</span>
                </p>
                <p>{ body }</p>
            </li>
        </ul>
    );
};
