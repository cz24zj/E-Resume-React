import { apiCall } from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadmessage = (message) => ({
    type: dealType('LOAD', 'MESSAGE'),
    message
})

export const Addmessage = (message) => ({
    type: dealType('ADD', 'MESSAGE'),
    message,
})

export const Updatemessage = (message, id) => ({
    type: dealType('UPDATE', 'MESSAGE'),
    message,
    id
})

export const Deletemessage = (id) => ({
    type: dealType('DELETE', 'MESSAGE'),
    id
})



export const fetchmessage = (user_id) => {
    return dispatch => {
        return apiCall('GET', `/api/user/${user_id}/message`)
            .then(res => {
                dispatch(Loadmessage(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const addmessage = (user_id, message) => {
    return dispatch => {
        return apiCall('POST', `/api/user/${user_id}/message`, message)
            .then(res => {
                dispatch(Addmessage(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const updatemessage = (user_id, message_id, message) => {
    return dispatch => {
        return apiCall('PUT', `/api/user/${user_id}/message/${message_id}`, message)
            .then(res => {
                dispatch(Updatemessage(message, res._id))
            })
            .catch(err => {
                dispatch(addError(err.message))
            });
    }
}

export const deletemessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall('DELETE', `/api/user/${user_id}/message/${message_id}`)
            .then(res => {
                dispatch(Deletemessage(res._id));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}