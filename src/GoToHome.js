import React from 'react';
import { withRouter } from 'react-router';

const GoToHome = (props) => {
    return (
        <div>
            <button onClick={e => ( props.history.push('/'))}>Go To Home</button>
        </div>
    )
}

export default withRouter(GoToHome);
