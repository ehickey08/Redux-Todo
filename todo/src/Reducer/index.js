import {COMPLETED_ITEM, ADD_TODO} from '../Actions/index.js'

let id = 0;

const initialState = {
    todoList: [{value: 'Create an initial state.', completed: false, id: id++}]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {todoList: [...state.todoList, {value: action.item, completed: false, id: id++}]}
        case COMPLETED_ITEM:
            let clickedItem = state.todoList.map(item => {
                if(item.id === action.id) item.completed = !item.completed;
                return item;
            });
            return {todoList: clickedItem}
        default:
            return state
    }
}

export default reducer
