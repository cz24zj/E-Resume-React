import dealType from '../actionType' 

const skill = (state =[],action)=>{
    switch(action.type){
        case dealType('LOAD','SKILL'):{
            return [...action.skill];
        }
        case dealType('ADD','SKILL'):{
            return [...state,action.skill];
        }
        case dealType('DELETE','SKILL'):{
            return state.filter(skill=>
                skill._id !== action.id
            )
        }
        case dealType('UPDATE','SKILL'):{
            return state.map(skill=>{
                if(skill._id === action.id){
                    skill = action.skill;
                }
                return skill;
            })
        }
        default:
        return state;
    }
}

export default skill;