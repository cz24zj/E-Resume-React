import dealType from '../actionType' 

const experience = (state =[],action)=>{
    switch(action.type){
        case dealType('LOAD','EXPERIENCE'):{
            return [...action.experience];
        }
        case dealType('ADD','EXPERIENCE'):{
            return [...state,action.experience];
        }
        case dealType('DELETE','EXPERIENCE'):{
            return state.filter(experience=>
                experience._id !== action.id
            )
        }
        case dealType('UPDATE','EXPERIENCE'):{
            return state.map(experience=>{
                if(experience._id === action.id){
                    experience = action.experience;
                }
                return experience;
            })
        }
        default:
        return state;
    }
}

export default experience;