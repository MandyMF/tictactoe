import React from 'react';

const LogButton = (props: any) => {

    return (    
        <button onClick={props.onClick}>
            {
                props.idx === 0 ? "Go to game start" :  `Go to move #${props.idx}`
            }
        </button>
    );
}

export default LogButton;