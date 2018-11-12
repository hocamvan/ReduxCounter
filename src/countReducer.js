const countReducer = (state = 0, action) => {
    // switch (action.type) {
    //     case 'ADD1':
    //         return state + 1;
    //     case 'REMOVE1':
    //         return state - 1;
    //     case 'ADD10':
    //         return state + 10;
    //     case 'REMOVE10':
    //         return state - 10;
    //     case 'RESET':
    //         return state = 0;
    //     default:
    //         return state;
    // }
    switch (action.type) {
        case 'ADD':
            return state + action.payload.value;
        case 'REMOVE':
            return state - action.payload.value;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};
export default countReducer;