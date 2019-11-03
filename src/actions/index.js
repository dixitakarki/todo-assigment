export const selectBucketAction = (bucket) => {
    return {
        type: 'SELECTED_BUCKET',
        payload: bucket
    }
};
export const addBucketAction = (bucket) => {
    return {
        type: 'ADD_BUCKET',
        payload: bucket
    }
};
export const addNodeAction = (node) => {
    return {
        type: 'ADD_NODE',
        payload: node
    }
};
export const deleteBucketAction = (node) => {
    return {
        type: 'DELETE_BUCKET',
        payload: node
    }
};
export const deleteNodeAction = (node) => {
    return {
        type: 'DELETE_NODE',
        payload: node
    }
};
export const updateStateAction = (node) => {
    return {
        type: 'CHANGE_STATE',
        payload: node
    }
};
