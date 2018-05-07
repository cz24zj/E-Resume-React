export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export default function dealType (action,type){
    return `${action}_${type}`;
}
