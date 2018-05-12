import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

// Authenticatd by default
export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        //const { username } = params;
        localStorage.setItem('username', username);
        localStorage.setItem('user', username);
        localStorage.setItem('pass', password);
        // accept all username/password combinations
        //return Promise.resolve();


        if (username === 'login' && password === 'password') {
            localStorage.removeItem('not_authenticated');
            localStorage.removeItem('role');
            return Promise.resolve();
        }
        if (username === 'user' && password === 'password') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }

        if (username === 'patient1' && password === 'patient1') {
            localStorage.setItem('role', 'patient');
            localStorage.setItem('patientId', 1);
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }
        if (username === 'patient2' && password === 'patient2') {
            localStorage.setItem('role', 'patient');
            localStorage.setItem('patientId', 2);
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }
        if (username === 'patient3' && password === 'patient3') {
            localStorage.setItem('role', 'patient');
            localStorage.setItem('patientId', 3);
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }

        if (username === 'doctor1' && password === 'doctor1') {
            localStorage.setItem('role', 'doctor');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }

        if (username === 'doctor2' && password === 'doctor2') {
            localStorage.setItem('role', 'doctor');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }
        
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }
    
    if (type === AUTH_LOGOUT) {
        localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    }
    
    if (type === AUTH_CHECK) {
        const { resource } = params;

        console.log('i am AUTH_CHECK: ' + JSON.stringify(params))

        if (params.page === 'page2') {
            console.log('this is page 2')
        }

        if (resource === 'posts') {
            console.log('check credentials for the posts resource')
        }

        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    }
    
   /*
   if (type === AUTH_CHECK) {
    const { resource } = params;
    if (resource === 'posts') {
        console.log('check credentials for the posts resource')
    }
    if (resource === 'comments') {
        // check credentials for the comments resource
    }
   }
   */
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
    }

    return Promise.reject('Unknown method');
};
