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
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import { InputAdornment } from 'material-ui/Input';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
export const PulseIcon = PeopleIcon;

var faker = require('faker');

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

export const PulseList = ({ permissions, ...props }) => (
    <List
        {...props}
        filters={<PulseFilter permissions={permissions} />}
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
                <Datagrid hover={true}>
                    <TextField source='id' />
                    <TextField source='patientId' />
                    <TextField source='timestamp' />
                    <TextField source='bpm' />
                    <TextField source='status' />
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);

const PulseTitle = translate(({ record, translate }) => (
    <span>
        {record ? translate('user.edit.title', { title: record.name }) : ''}
    </span>
));

const PulseCreateToolbar = ({ permissions, ...props }) => (
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

export const PulseCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
        <NumberInput source='patientId' defaultValue={faker.random.objectElement({one: 1, two: 2, three: 3 , four: 4, five: 5})} />
        <NumberInput source='timestamp' defaultValue={+ new Date()} />
        <NumberInput source='bpm' defaultValue={faker.random.number({min:60, max:200})} />
        <TextInput defaultValue='normal' />
        </SimpleForm>
    </Create>
);

export const PulseEdit = ({ permissions, ...props }) => (
    <Edit title={<PulseTitle />} {...props}>
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

export const PulseShow = ({ permissions, ...props }) => (
    <Show title={<PulseTitle />} {...props}>
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
