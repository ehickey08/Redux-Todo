export const ADD_TODO = "ADD_TODO";
export const COMPLETED_ITEM = "COMPLETED_ITEM"
export const DELETE_COMPLETED = "DELETE_COMPLETED"
export const FILTER_COMPLETED = "FILTER_COMPLETED"
export const SHOW_ALL = "SHOW_ALL"
export const GET_LOCAL_STORAGE = "GET_LOCAL_STORAGE"


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

export const deleteCompleted = item => {
    return{
        type: DELETE_COMPLETED,
        item
    }
}

export const filterCompleted = () => {
    return{
        type: FILTER_COMPLETED
    }
}


export const showAll = () => {
    return{
        type: SHOW_ALL
    }
}

export const fromLocalStorage = todoList => {
    return{
        type: GET_LOCAL_STORAGE,
        todoList
    }
}