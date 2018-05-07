import dealType from '../actionType' 

const profile = (state =[],action)=>{
    switch(action.type){
        case dealType('LOAD','PROFILE'):{
            return [...action.profile]
        }
        case dealType('ADD','PROFILE'):{
            return [...state,action.profile];
        }
        case dealType('DELETE','PROFILE'):{
            return state.filter(profile=>
                profile._id !== action.id
            ) 
        }
        case dealType('UPDATE','PROFILE'):{
            return state.map((profile)=>{
                if(profile._id === action.id){
                    profile = action.profile;
                }
                return profile;
            })
        }
        default:
        return state;
    }
}

export default profile;