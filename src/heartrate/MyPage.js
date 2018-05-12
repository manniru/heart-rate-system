import React, { Component}  from 'react';
import { withRouter } from 'react-router-dom';
import { Authenticated } from 'react-admin';

// const MyPage = ({ location }) => (
//     <Authenticated authParams={{ foo: 'bar' }} location={location}>
//         <div>
//             <h1>MyPage</h1>
//         </div>
//     </Authenticated>
// );

const MyPage = ({ location }) => (
        <div>
            <h1>MyPage hello</h1>
        </div>
);

export default withRouter(MyPage);
