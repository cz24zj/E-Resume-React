import dealType from '../actionType' 

const school = (state = [],action)=>{
    switch(action.type){
        case dealType('LOAD','SCHOOL'):{
            return [...action.school]
        }
        case dealType('ADD','SCHOOL'):{
            return [...state,action.school];
        }
        case dealType('DELETE','SCHOOL'):{
            return state.filter(school=>
                school._id !== action.id
            )
        }
        case dealType('UPDATE','SCHOOL'):{
            return state.map((school)=>{
                if(school._id === action.id){
                    school = action.school;
                }
                return school;
            })
        }
        default:
        return state;
    }
}

export default school;