import dealType from '../actionType'

const message = (state = [], action) => {
    switch (action.type) {
        case dealType('LOAD', 'MESSAGE'): {
            return [...action.message];
        }
        case dealType('ADD', 'MESSAGE'): {
            return [...state]
        }
        case dealType('UPDATE', 'MESSAGE'): {
            return state.map(message => {
                if (message._id === message) {
                    message = action.message;
                }
                return message;
            })
        }
        case dealType('DELETE', 'MESSAGE'): {
            return state.filter(message =>
                message._id !== action.id
            )
        }
        default:
            return state;
    }
}

export default message;