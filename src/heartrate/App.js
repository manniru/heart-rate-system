import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router';
import jsonServerProvider from 'ra-data-json-server';
//import PostIcon from '@material-ui/icons/Book';
//import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

//others
import CustomRouteNoLayout from './components/customRouteNoLayout';
import CustomRouteLayout from './components/customRouteLayout';

import { PostList, PostCreate, PostEdit, PostShow, PostIcon } from './posts';
import {
    CommentList,
    CommentEdit,
    CommentCreate,
    CommentShow,
    CommentIcon,
} from './comments';
// health system
import { UserList, UserEdit, UserCreate, UserIcon, UserShow } from './users';
import { DoctorList, DoctorEdit, DoctorCreate, DoctorIcon, DoctorShow } from './doctors';
import { PatientList, PatientEdit, PatientCreate, PatientIcon, PatientShow } from './patients';

import { PulseList, PulseEdit, PulseCreate } from './pulses';
import PulseIcon from '@material-ui/icons/People';

//import dataProvider from './dataProvider';

//var dataProvider = jsonServerProvider('https://35.232.234.165:3001');
var dataProvider = jsonServerProvider('http://localhost:3001');

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
        {
            permissions => [
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
            <Resource
                    name="doctors"
                    list={DoctorList}
                    create={DoctorCreate}
                    edit={DoctorEdit}
                    icon={DoctorIcon}
                    show={DoctorShow}
            />,
            <Resource
                    name="patients"
                    list={PatientList}
                    create={PatientCreate}
                    edit={PatientEdit}
                    icon={PatientIcon}
                    show={PatientShow}
            />,
            <Resource name="pulses" list={PulseList} edit={PulseEdit} create={PulseCreate} icon={PulseIcon}/>
            ,
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