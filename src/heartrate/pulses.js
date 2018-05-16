import React from 'react';
import {
    Create,
    Datagrid,
    DisabledInput,
    Edit,
    EditButton,
    DeleteButton,
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
import BookIcon from '@material-ui/icons/Book';

var faker = require('faker');

const patientId = (localStorage.getItem('patientId') ? localStorage.getItem('patientId') : 1)
const role = localStorage.getItem('role');

export const PulseIcon = BookIcon;

export const PulseList = ({ permissions, ...props }) => {
    console.log(+ new Date())
    return <span>

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
    return <span>Pulse {record ? `"${record.title}"` : ''}</span>;
};

export const PulseCreate = (props) => (
    <Create title="Create a Pulse" {...props}>
        <SimpleForm redirect="/pulses">
          <NumberInput source='patientId' defaultValue={faker.random.objectElement({one: 1, two: 2, three: 3})} />
          <NumberInput source='timestamp' defaultValue={+ new Date()} />
          <NumberInput source='bpm' defaultValue={faker.random.number({min:60, max:200})} />
          <NumberInput source='status' defaultValue ={0} />
        </SimpleForm>
    </Create>
);

export const PulseEdit = (props) => (
    <Edit title={<PulseTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <NumberInput source='patientId' />
            <NumberInput source='timestamp' />
            <NumberInput source='bpm' />
            <NumberInput source='status' />
            <DisabledInput label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);
