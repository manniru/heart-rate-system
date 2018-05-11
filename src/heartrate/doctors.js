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
export const DoctorIcon = PeopleIcon;

const DoctorFilter = ({ permissions, ...props }) => (
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

export const DoctorList = ({ permissions, ...props }) => (
    <List
        {...props}
        filters={<DoctorFilter permissions={permissions} />}
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
                    <TextField source="id" />
                    <TextField source="name" />
                    {permissions === 'admin' && <TextField source="role" />}
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);

const DoctorTitle = translate(({ record, translate }) => (
    <span>
        {record ? translate('user.edit.title', { title: record.name }) : ''}
    </span>
));

const DoctorCreateToolbar = ({ permissions, ...props }) => (
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

export const DoctorCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm
            toolbar={<DoctorCreateToolbar permissions={permissions} />}
            defaultValue={{ role: 'user' }}
        >
            <TextInput source="name" validate={[required()]} />
            {permissions === 'admin' && (
                <TextInput source="role" validate={[required()]} />
            )}
        </SimpleForm>
    </Create>
);

export const DoctorEdit = ({ permissions, ...props }) => (
    <Edit title={<DoctorTitle />} {...props}>
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

export const DoctorShow = ({ permissions, ...props }) => (
    <Show title={<DoctorTitle />} {...props}>
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
