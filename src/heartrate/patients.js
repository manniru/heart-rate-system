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
    Toolbar,
    required,
    translate,
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import { InputAdornment } from 'material-ui/Input';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';

var faker = require('faker');

// const PatientPhoto = () => ( <img src={faker.image.avatar()} alt="" /> ));
const Photo = ({ record }) => (
    <span>
        {record ? <img src={record.photo} alt="Photo" /> : ''}
    </span>
);

export const PatientIcon = PeopleIcon;

const PatientFilter = ({ permissions, ...props }) => (
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

export const PatientList = ({ permissions, ...props }) => (
    <List
        {...props}
        filters={<PatientFilter permissions={permissions} />}
        sort={{ field: 'name', order: 'ASC' }}
    >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record =>
                        permissions === 'admin' ? record.role : null}
                />
            }
            medium={
                <Datagrid hover={false}>
                    <TextField source='id' />
                    <Photo />
                    <TextField source='name' />
                    <TextField source='password' />
                    <TextField source='role' />
                    <TextField source='phone' />
                    <TextField source='timestamp' />
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);

const PatientTitle = translate(({ record, translate }) => (
    <span>
        {record ? translate('user.edit.title', { title: record.name }) : ''}
    </span>
));

const PatientCreateToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton
            label="user.action.save_and_show"
            redirect="show"
            submitOnEnter={true}
        />
        {permissions === 'admin' && (
            <SaveButton
                label="user.action.save_and_add"
                redirect={false}
                submitOnEnter={false}
                variant="flat"
            />
        )}
    </Toolbar>
);

export const PatientCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm
            toolbar={<PatientCreateToolbar permissions={permissions} />}
            defaultValue={{ role: 'patient', phone: '+600000000001' }}
        >
          <TextInput source='name' />
          <TextInput source='password' />
          <TextInput source='role' />
          <TextInput source='phone' />
          <TextInput source='timestamp' defaultValue={+ new Date()} />
        </SimpleForm>
    </Create>
);

export const PatientEdit = ({ permissions, ...props }) => (
    <Edit title={<PatientTitle />} {...props}>
        <TabbedForm defaultValue={{ role: 'user' }}>
            <FormTab label="user.form.summary">
                {permissions === 'admin' && <DisabledInput source="id" />}
                <TextInput source="name" validate={required()} />
            </FormTab>
            {permissions === 'admin' && (
                <FormTab label="user.form.security">
                    <TextInput source="role" validate={required()} />
                </FormTab>
            )}
        </TabbedForm>
    </Edit>
);

export const PatientShow = ({ permissions, ...props }) => (
    <Show title={<PatientTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="user.form.summary">
                <TextField source="id" />
                <TextField source="name" />
            </Tab>
            {permissions === 'admin' && (
                <Tab label="user.form.security">
                    <TextField source="role" />
                </Tab>
            )}
        </TabbedShowLayout>
    </Show>
);
