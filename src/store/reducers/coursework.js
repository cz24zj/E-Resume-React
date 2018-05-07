import dealType from '../actionType' 

const coursework = (state =[],action)=>{
    switch(action.type){
        case dealType('LOAD','COURSEWORK'):{
            return [...action.coursework];
        }
        case dealType('ADD','COURSEWORK'):{
            return [...state,action.coursework];
        }
        case dealType('DELETE','COURSEWORK'):{
            return state.filter(coursework=>
                coursework._id !== action.id
            )
        }
        case dealType('UPDATE','COURSEWORK'):{
            return state.map(coursework=>{
                if(coursework._id === action.id){
                    coursework = action.coursework;
                }
                return coursework;
            })
        }
        default:
        return state;
    }
}

export default coursework;