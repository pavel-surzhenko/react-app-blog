export const Input = (props) => {
    let input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type } { ...props.register } />
    );

    if (props.tag === 'textarea') {
        input = (
            <textarea
                placeholder = { props.placeholder }
                { ...props.register } />
        );
    }

    return (
        <label>
            { input }
            <div>
                <span
                    style = { {
                        color: 'red', fontSize: '10px', text: 'left',
                    } } className = 'error-message'>{ props.error?.message }</span>
            </div>
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};
