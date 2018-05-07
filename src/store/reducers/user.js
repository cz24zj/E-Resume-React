import dealType from '../actionType';
const INITIAL_STATE = [
    {
        profile: [{}],
        school: [],
        experience: [],
        skill: [],
        coursework: [],
        
    }
]
const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dealType('LOAD', 'USER'):
            {
                return [...action.user];
            }
        default:
            return state;
    }
}

export default user;