import React from 'react';

const Form = ({ children, ...props }) => {
    return (
        <form onSubmit={props.onSubmit}>
            {children}
        </form>
    )
}

export default Form;