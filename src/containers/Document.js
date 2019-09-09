import React from 'react';
import GoToHome from './GoToHome';

const Document = (props) => {
    return (
        <div>
            <h1>Document : {props.match.params.id}</h1>
            <h1>Mode : {props.match.params.mode}</h1>
            <GoToHome />
        </div>
    )
}

export default Document;
