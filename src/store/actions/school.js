import { apiCall } from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadschool = (school) => ({
    type: dealType('LOAD', 'SCHOOL'),
        school
})

export const Addschool = (school) => ({
    type: dealType('ADD', 'SCHOOL'),
    school
})

export const Updateschool = (id, school) => ({
    type: dealType('UPDATE', 'SCHOOL'),
        id,
        school
})

export const Deleteschool = (id) => ({
    type: dealType('DELETE', 'SCHOOL'),
        id
})

export const fetchschool = (user_id) =>{

    return dispatch => {
        return apiCall('GET', `/api/user/${user_id}/school`)
            .then(res => {
                dispatch(Loadschool(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
} 

export const addschool = (user_id, school) => {
    return dispatch => {
        return apiCall('POST', `/api/user/${user_id}/school`, school )
            .then(res => {
                dispatch(Addschool(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const updateschool = (user_id, school_id, school) => {
    return dispatch => {
        return apiCall('PUT', `/api/user/${user_id}/school/${school_id}`,school)
            .then(res => {
                dispatch(Updateschool(res._id, school));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}
export const deleteschool = (user_id, school_id) => {
    return dispatch => {
        return apiCall('DELETE', `/api/user/${user_id}/school/${school_id}`)
            .then(res => {
                dispatch(Deleteschool(res._id));
            })
            .catch(err => {
                dispatch(removeError(err.message));
            });
    }
}