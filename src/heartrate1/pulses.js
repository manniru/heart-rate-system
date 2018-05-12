import React from 'react';

import {
    Create,
    Datagrid,
    DisabledInput,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    Responsive,
    SaveButton,
    Show,
    ShowButton,
    SimpleForm,
    SimpleList,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
    NumberInput,
    Toolbar,
    required,
    translate,
    InputAdornment,
    SearchIcon,
} from 'react-admin';

var faker = require('faker');
//const token = localStorage.getItem('token');
//filter={{ patientId: 3 }}

const PulseFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        <TextInput
            label="user.list.search"
            source="q"
            alwaysOn
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon color="disabled" />
                    </InputAdornment>
                ),
            }}
        />
        <TextInput source="name" />
        {permissions === 'admin' ? <TextInput source="role" /> : null}
    </Filter>
);

const patientId = (localStorage.getItem('patientId') ? localStorage.getItem('patientId') : 1)
const role = localStorage.getItem('role');

console.log('username='+localStorage.getItem('username'))

export const PulseList1 = ({ permissions, ...props }) => (
    <List 
    {...props} 
    filter={{ patientId: patientId }}
    >
        <Datagrid>
            <TextField source='id' />
            <TextField source='patientId' />
            <TextField source='timestamp' />
            <TextField source='bpm' />
            <TextField source='status' />
            <EditButton basePath="/pulses" />
        </Datagrid>
    </List>
);

export const PulseList = ({ permissions, ...props }) => {
    console.log(+ new Date())
    return <span>mm

   {permissions === 'admin' && (
            <List {...props}>
        <Datagrid>
                <TextField source='id' />
                <TextField source='patientId' />
                <TextField source='timestamp' />
                <TextField source='bpm' />
                <TextField source='status' />
                <EditButton basePath="/pulses" />
            </Datagrid>
        </List>
    )}


    {permissions === 'patient' && (
            <List 
            {...props} 
            filter={{ patientId: patientId }}
            >
                <Datagrid>
                    <TextField source='id' />
                    <TextField source='patientId' />
                    <TextField source='timestamp' />
                    <TextField source='bpm' />
                    <TextField source='status' />
                    <EditButton basePath="/pulses" />
                </Datagrid>
            </List>
    )}
            
    </span>;
};

const PulseTitle = ({ record }) => {
    return <span>Pulse {record ? `"${record.patientId}"` : ''}</span>;
};

export const PulseEdit = (props) => (
    <Edit title={<PulseTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <NumberInput source='patientId' />
            <NumberInput source='timestamp' />
            <NumberInput source='bpm' />
            <NumberInput source='status' />
        </SimpleForm>
    </Edit>
);

export const PulseCreate = (props) => (
    <Create title="Create a Pulse" {...props}>
        <SimpleForm>
        <NumberInput source='patientId' defaultValue={faker.random.objectElement({one: 1, two: 2, three: 3 , four: 4, five: 5})} />
        <NumberInput source='timestamp' defaultValue={+ new Date()} />
        <NumberInput source='bpm' defaultValue={faker.random.number({min:60, max:200})} />
        <NumberInput source='status' defaultValue ={0} />
        </SimpleForm>
    </Create>
);
