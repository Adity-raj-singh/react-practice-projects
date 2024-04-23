import React from 'react';

function Button({ style, label, onClick }) {

    return (
        <button style={style} onClick={onClick}> {label} </button>
    )
}

export default Button;