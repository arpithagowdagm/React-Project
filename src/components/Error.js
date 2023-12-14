import React from 'react';
import { useRouteError } from 'react-router-dom';
function Error(props) {
    const err = useRouteError();
    return (
        <div>
            <h2> something wrong </h2>
            <h3>Status: {err.status}</h3>
            <h3>Error Data: {err.data}</h3>

        </div>
    );
}

export default Error;