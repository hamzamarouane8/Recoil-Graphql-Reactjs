
import * as store from '../../components/store/LocalStorage';
import UUID from '../../components/commons/uuid';

export const reducer = (state, action) => {
    console.log('dispatch activate reducer')
    let sessionId = null;
    const prefix = (id) => `${state.appId || action.appId}-${id}`;

    switch (action.type) {
        case 'LOGOUT':
            //store.reset();
            store.remove(prefix('session_user'));
            store.remove(prefix('session_id'));
            return { appId: state.appId, user: null, authenticated: false };
        case 'LOGIN':
            if (!action.payload) throw new Error('INVALID_LOGIN_PAYLOAD');
            sessionId = UUID.create();
            //store.set('user.access_token', action.payload.access_token);
            store.set(prefix('session_user'), JSON.stringify(action.payload), sessionId);
            store.set(prefix('session_id'), Buffer.from(sessionId).toString('base64'));
            return { ...state, authenticated: true, user: action.payload };
    }
    return state;
};

export const provider = ({ state }) => {
    let session = null;
    let user = null;
    const sessionId = store.get('session_id');
    console.log('hh',sessionId)

    try {
        const secret = Buffer.from(sessionId, 'base64').toString('utf8');
        const userCached = store.get(`session_user`, secret);
        user = JSON.parse(userCached);
    } catch (e) {
        console.warn(e.message);
    }

    return { ...state, user, authenticated: user != null };
}
