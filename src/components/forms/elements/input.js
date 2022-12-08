export const Input = (props) => {
    const input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type } { ...props.register } />
    );

    return (
        <label>
            <div>
                <span className = 'error-message'>{ props.error?.message }</span>
            </div>
            { input }
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};
