import BucketReducer from './bucket';
export default function (state = BucketReducer(), action) {
    switch (action.type) {
        case 'SELECTED_BUCKET':
            return action.payload;
            break;
        case 'ADD_BUCKET':
            return Object.assign({}, state, action.payload);
            break;
        case 'ADD_NODE':
            return Object.assign({}, state, action.payload);
            break;
        case 'DELETE_BUCKET':
            return Object.assign({}, action.payload);
            break;
        case 'DELETE_NODE':
            return Object.assign({}, action.payload);
            break;
        case 'CHANGE_STATE':
            return Object.assign({}, state, action.payload);
            break;
        default:
            return state;
    }
    return state;
}