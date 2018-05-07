import {apiCall} from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadprofile = (profile)=>({
    type:dealType('LOAD','PROFILE'),
    profile
})

export const Addprofile = (profile)=>({
    type: dealType('ADD','PROFILE'),
    profile
})

export const Updateprofile = (id,profile)=>({
    type: dealType('UPDATE','PROFILE'),
    profile,
    id
})

export const Deleteprofile = (id)=>({
    type: dealType('DELETE','PROFILE'),
    id
})

export const fetchprofile = (user_id)=>{
    return dispatch=>{
        return apiCall('GET',`/api/user/${user_id}/profile`   )
        .then(res => {
            dispatch(Loadprofile(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const addprofile = (user_id,profile)=>{
    return dispatch=>{
        return apiCall('POST',`/api/user/${user_id}/profile`,profile)
        .then(res => {
            dispatch(Addprofile(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const updateprofile = (user_id,profile_id,profile)=>{
    return dispatch=>{
        return apiCall('PUT',`/api/user/${user_id}/profile/${profile_id}`,profile)
        .then(res => {
            dispatch(Updateprofile(res._id,profile));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}
export const deleteprofile = (user_id,profile_id)=>{
    return dispatch=>{
        return apiCall('DELETE',`/api/user/${user_id}/profile/${profile_id}`)
        .then(res => {
            dispatch(Deleteprofile(res._id));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}