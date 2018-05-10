import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin 
    dataProvider={dataProvider}
    title="Cloud-Based Realtime Heart Rate Monitoring System"
    >
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />

    </Admin>
);

export default App;