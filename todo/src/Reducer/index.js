import {COMPLETED_ITEM, ADD_TODO, DELETE_COMPLETED, SHOW_ALL, FILTER_COMPLETED, GET_LOCAL_STORAGE} from '../Actions/index.js'

let id = 0;

const initialState = {
    todoList: [],
    displayed: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            let addedItem = [...state.todoList, {value: action.item, completed: false, id: id++}]
            localStorage.setItem("todo", JSON.stringify(addedItem));
            return {todoList: addedItem, displayed: addedItem}
        case COMPLETED_ITEM:
            let clickedItem = state.todoList.map(item => {
                if(item.id === action.id) 
                    item.completed = !item.completed;
                return item;
            });
            localStorage.setItem("todo", JSON.stringify(clickedItem));
            return {todoList: clickedItem, displayed: clickedItem}
        case DELETE_COMPLETED:
            let removedItems = state.todoList.filter(item => item.completed === false)
            localStorage.setItem("todo", JSON.stringify(removedItems));
            return {todoList: removedItems, displayed: removedItems}
        case SHOW_ALL:
            return {todoList: state.todoList, displayed: state.todoList}
        case FILTER_COMPLETED:
            let completedItems = state.todoList.filter(item => item.completed === false)
            return {todoList: state.todoList, displayed: completedItems}
        case GET_LOCAL_STORAGE:
            return{todoList: action.todoList, displayed: action.todoList}
        default:
            return state
    }
}

export default reducer
