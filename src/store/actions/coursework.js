import { apiCall } from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadcoursework = (coursework) => ({
    type: dealType('LOAD', 'COURSEWORK'),
    coursework
})

export const Addcoursework = (coursework) => ({
    type: dealType('ADD', 'COURSEWORK'),
    coursework
})

export const Updatecoursework = (id, coursework) => ({
    type: dealType('UPDATE', 'COURSEWORK'),
    id,
    coursework
})

export const Deletecoursework = (id) => ({
    type: dealType('DELETE', 'COURSEWORK'),
    id
})

export const fetchcoursework = (user_id) => {
    return dispatch => {
        return apiCall('GET', `/api/user/${user_id}/coursework`)
            .then(res => {
                dispatch(Loadcoursework(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const addcoursework = (user_id, coursework) => {
    return dispatch => {
        return apiCall('POST', `/api/user/${user_id}/coursework`, coursework)
            .then(res => {
                dispatch(Addcoursework(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const updatecoursework = (user_id, coursework_id, coursework) => {
    return dispatch => {
        return apiCall('PUT', `/api/user/${user_id}/coursework/${coursework_id}`, coursework)
            .then(res => {
                dispatch(Updatecoursework(res._id, coursework));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}
export const deletecoursework = (user_id, coursework_id) => {
    return dispatch => {
        return apiCall('DELETE', `/api/user/${user_id}/coursework/${coursework_id}`)
            .then(res => {
                dispatch(Deletecoursework(res._id));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}