import React, { Component}  from 'react';
import { withRouter } from 'react-router-dom';
import { Authenticated } from 'react-admin';

const Page1 = ({ location }) => (
        <div>
            <h1>This is Page1</h1>
        </div>
);

export default withRouter(Page1);
