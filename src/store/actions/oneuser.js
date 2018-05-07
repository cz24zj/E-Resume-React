import {apiCall} from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js';

export const Loadoneuser = (user)=>({
    type:dealType('LOAD','ONEUSER'),
    user
})

export const fetchoneuser = (user_id)=>{
    return dispatch =>{
        return apiCall('GET',`/api/user/${user_id}`)
        .then(res=>{
            dispatch(Loadoneuser(res));
        })
        .catch(err=>{
            dispatch(addError(err));
        })
    }
}