/**
 * List action
 */


export const getList = () => {
    return {
        type: 'GET_LIST',
        tags: []
    }
}

let nextListId = 1
export const addListCount = (state, text) => {
    return {
        type: 'ADD_LIST',
        id: nextListId++,
        text
    }
}