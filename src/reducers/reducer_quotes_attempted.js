export default function(state = null, action){
    console.log('payload: ', action.payload)
    switch(action.type){
        case 'QUOTES_ATTEMPTED':
            return action.payload
    }
    return state;
}