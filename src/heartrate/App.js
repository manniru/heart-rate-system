import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { Admin, Resource } from 'react-admin';
import { AccessAlarm, ThreeDRotation, Accessible } from '@material-ui/icons';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';

import { DoctorList, DoctorEdit, DoctorCreate, DoctorIcon, DoctorShow } from './doctors';
import { PatientList, PatientEdit, PatientCreate, PatientIcon, PatientShow } from './patients';
import { PulseList, PulseEdit, PulseCreate, PulseIcon } from './pulses';
import { PostCreate, PostEdit } from './posts';
import {
    CommentList,
    CommentEdit,
    CommentCreate,
    CommentShow,
    CommentIcon,
} from './comments';

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

//var dataProvider = jsonServerProvider('http://35.232.234.165:3001');
var dataProvider = jsonServerProvider('http://localhost:3001');
console.log(process.env.API_SERVER);


const App = () => (
  <Admin
  title="Cloud-Based Realtime Heart Rate Monitoring System"
  authProvider={authProvider}
  dataProvider={dataProvider}
  dashboard={Dashboard}

  customRoutes={[
      <Route exact path="/page1" component={Page1} />,
      <Route exact path="/page2" component={Page2} />,
      <Route exact path="/page3" component={Page3} />,
  ]}

  >
  <Resource name="pulses" list={PulseList} edit={PulseEdit} create={PulseCreate} icon={PulseIcon}/>

    <Resource
            name="doctors"
            list={DoctorList}
            create={DoctorCreate}
            edit={DoctorEdit}
            icon={DoctorIcon}
            show={DoctorShow}
    />
    <Resource
            name="patients"
            list={PatientList}
            create={PatientCreate}
            edit={PatientEdit}
            icon={Accessible}
            show={PatientShow}
    />

  </Admin>
);

export default App;
