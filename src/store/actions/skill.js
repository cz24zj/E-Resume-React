import {apiCall} from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js'

export const Loadskill = (skill)=>({
    type:dealType('LOAD','SKILL'),
    skill
})

export const Addskill = (skill)=>({
    type: dealType('ADD','SKILL'),
    skill
})

export const Updateskill = (id,skill)=>({
    type: dealType('UPDATE','SKILL'),
    id,
    skill
})

export const Deleteskill = (id)=>({
    type: dealType('DELETE','SKILL'),
    id
})

export const fetchskill = (user_id)=>{
    return dispatch=>{
        return apiCall('GET',`/api/user/${user_id}/skill`)
        .then(res => {
            dispatch(Loadskill(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const addskill = (user_id,skill)=>{
    return dispatch=>{
        return apiCall('POST',`/api/user/${user_id}/skill`,skill)
        .then(res => {
            dispatch(Addskill(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}

export const updateskill = (user_id,skill_id,skill)=>{
    return dispatch=>{
        return apiCall('PUT',`/api/user/${user_id}/skill/${skill_id}`,skill)
        .then(res => {
            dispatch(Updateskill(res._id,skill));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}
export const deleteskill = (user_id,skill_id)=>{
    return dispatch=>{
        return apiCall('DELETE',`/api/user/${user_id}/skill/${skill_id}`)
        .then(res => {
            dispatch(Deleteskill(res._id));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
    }
}