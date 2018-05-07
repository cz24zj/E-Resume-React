import {apiCall} from '../../services/api';
import dealType from '../actionType';
import { addError, removeError } from './errors.js';

export const Loaduser = (user)=>({
    type:dealType('LOAD','USER'),
    user
})



export const fetchuser = ()=>{
    return dispatch =>{
        return apiCall('GET','/api/user/')
        .then(res=>{
            dispatch(Loaduser(res))
        })
        .catch(err=>{
            dispatch(addError(err.message))
        })
    }
}



