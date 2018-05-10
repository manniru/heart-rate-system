import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';

import { Admin, Resource } from 'react-admin';

import { PostList, PostCreate, PostEdit, PostShow, PostIcon } from './posts';
import {
    CommentList,
    CommentEdit,
    CommentCreate,
    CommentShow,
    CommentIcon,
} from './comments';
import { UserList, UserEdit, UserCreate, UserIcon, UserShow } from './users';
import CustomRouteNoLayout from './components/customRouteNoLayout';
import CustomRouteLayout from './components/customRouteLayout';

import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
    <Admin
        title="Cloud-Based Realtime Heart Rate Monitoring System"
        authProvider={authProvider}
        dataProvider={dataProvider}
        customRoutes={[
            <Route
                exact
                path="/custom"
                component={CustomRouteNoLayout}
                noLayout
            />,
            <Route exact path="/custom2" component={CustomRouteLayout} />,
        ]}
    >
        {permissions => [
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                show={PostShow}
                icon={PostIcon}
            />,
            <Resource
                name="comments"
                list={CommentList}
                create={CommentCreate}
                edit={CommentEdit}
                show={CommentShow}
                icon={CommentIcon}
            />,
            permissions ? (
                <Resource
                    name="users"
                    list={UserList}
                    create={UserCreate}
                    edit={UserEdit}
                    icon={UserIcon}
                    show={UserShow}
                />
            ) : null,
            <Resource name="tags" />,
        ]}
    </Admin>
);

export default App;