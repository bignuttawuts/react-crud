import React from 'react';
import GoToHome from './GoToHome';

const Document = (props) => {
    return (
        <div>
            <h1>Document : {props.match.params.id}</h1>
            <GoToHome />
        </div>
    )
}

export default Document;
