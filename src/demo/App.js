import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import { AccessAlarm, ThreeDRotation, Accessible } from '@material-ui/icons';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';

import { DoctorList, DoctorEdit, DoctorCreate, DoctorIcon, DoctorShow } from './doctors';
import { PatientList, PatientEdit, PatientCreate, PatientIcon, PatientShow } from './patients';
import { PulseList, PulseEdit, PulseCreate, PulseIcon } from './pulses';
import { PostCreate, PostEdit } from './posts';

var dataProvider = jsonServerProvider('http://localhost:3001');


const App = () => (
  <Admin
  title="Cloud-Based Realtime Heart Rate Monitoring System"
  authProvider={authProvider}
  dataProvider={dataProvider}
  dashboard={Dashboard}
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
