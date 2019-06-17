export const ADD_TODO = "ADD_TODO";
export const COMPLETED_ITEM = "COMPLETED_ITEM"

export const addItem = item => {
    return {
        type: ADD_TODO,
        item
    }
}

export const completeItem = id => {
    return{
        type: COMPLETED_ITEM,
        id
    }
}