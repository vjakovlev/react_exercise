import React from 'react';

const Validation = (props) => {

    let valMessage = "";

    if (props.input.length < 5) {
        valMessage = "too short";
    } else if (props.input.length > 7) {
        valMessage = "too long";
    } else {
        valMessage = "all gucci";
    }


    return (
        <p>{valMessage}</p>
    );
}

export default Validation;