import React from 'react';

const Char = (props) => {

    const style = {
        display: 'inline-block',
        padding: '12px',
        border: '1px solid black',
        margin: '5px'
    }

    return (
        <div style={style}>
            <p onClick={props.del}>{props.val}</p>
        </div>
    );
}

export default Char;