// in app.js
import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestClient from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

render(
    <Admin dataProvider={simpleRestClient('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>,
    document.getElementById('root')
);