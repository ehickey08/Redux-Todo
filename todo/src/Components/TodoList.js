import React from 'react'
import { connect } from 'react-redux'

import {completeItem} from '../Actions/index'
import Todo from './Todo'

function TodoList(props) {
    return (
        <ul>
            {props.todoList.map(item => {
                return <Todo key={item.id} item = {item} completeItem = {props.completeItem} />
            })}
        </ul>
    )
    
}

const mapStateToProps = (state) => ({
    todoList: state.todoList
})


export default connect(mapStateToProps, {completeItem})(TodoList)
