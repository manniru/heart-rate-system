import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, NumberInput, LongTextInput, DateInput } from 'react-admin';

var faker = require('faker');

export const PulseList = (props) => (
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
);

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