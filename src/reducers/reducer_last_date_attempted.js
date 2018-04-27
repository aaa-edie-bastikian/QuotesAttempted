export default function(state = null, action){
    switch(action.type){
        case 'LAST_DATE_ATTEMPTED':
            return action.payload
    }
    return state;
}