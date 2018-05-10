import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
//import dataProvider from './dataProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin 
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
    title="Cloud-Based Realtime Heart Rate Monitoring System"
    >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />

    </Admin>
);

export default App;