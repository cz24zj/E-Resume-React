import dealType from '../actionType';

const INITIAL_STATE = {
    profile:[{}],
    school:[],
    experience:[],
    skill:[],
    coursework:[],
}
const oneuser = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case dealType('LOAD', 'ONEUSER'):
            return action.user
        default:
            return state;
    }
}

export default oneuser;