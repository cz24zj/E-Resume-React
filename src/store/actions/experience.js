import {apiCall} from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadexperience = (experience)=>({
    type:dealType('LOAD','EXPERIENCE'),
    experience
})

export const Addexperience = (experience)=>({
    type: dealType('ADD','EXPERIENCE'),
    experience
})

export const Updateexperience = (id,experience)=>({
    type: dealType('UPDATE','EXPERIENCE'),
    id,
    experience
})

export const Deleteexperience = (id)=>({
    type: dealType('DELETE','EXPERIENCE'),
    id
})

export const fetchexperience = (user_id)=>{
    return dispatch=>{
        return apiCall('GET',`/api/user/${user_id}/experience`)
        .then(res => {
            dispatch(Loadexperience(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const addexperience = (user_id,experience)=>{
    return dispatch=>{
        return apiCall('POST',`/api/user/${user_id}/experience`,experience)
        .then(res => {
            dispatch(Addexperience(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const updateexperience = (user_id,experience_id,experience)=>{
    return dispatch=>{
        return apiCall('PUT',`/api/user/${user_id}/experience/${experience_id}`,experience)
        .then(res => {
            dispatch(Updateexperience(res._id,experience));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}
export const deleteexperience = (user_id,experience_id)=>{
    return dispatch=>{
        return apiCall('DELETE',`/api/user/${user_id}/experience/${experience_id}`)
        .then(res => {
            dispatch(Deleteexperience(res._id));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}