import React from 'react';

const Validation = (props) => {

    let validationMessage = '';

    if (props.inputLength < 5) {
        validationMessage = 'text too short';
    } else if (props.inputLength > 7) {
        validationMessage = 'text too long';
    } else {
        validationMessage = 'good to go';
    }

    return(
        <div>
            <p>{validationMessage}</p>
            <p>{props.inputLength}</p>
        </div>
    );
}

export default Validation;