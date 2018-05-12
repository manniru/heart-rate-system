import React, { Component}  from 'react';
import { withRouter } from 'react-router-dom';
import { Authenticated } from 'react-admin';

// const Page2 = ({ location }) => (
//     <Authenticated authParams={{ foo: 'bar' }} location={location}>
//         <div>
//             <h1>This is Page 2</h1>
//         </div>
//     </Authenticated>
// );

class Page2 extends Component {
    render() {
        console.log(location)
        const location = location;
      return (
        <Authenticated authParams={{ page: 'page2' }} location={location}></Authenticated>
      );
    }
}

export default withRouter(Page2);  