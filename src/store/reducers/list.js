/**
 * List reducer
 */

const tagArr = [
    {
        id: 0,
        text: '未分组'
    }
]
const list = (state = tagArr, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return [...state, ...action.tags]
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state
    }

}

export default list