import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from './Components/TodoList'
import {addItem, filterCompleted, showAll, deleteCompleted, fromLocalStorage} from './Actions/index'

import './App.css';

class App extends Component {
    state = {
        inputItem: ''
    }
    
    submitItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputItem)
        this.setState({inputItem: ''})
    }

    changeHandler = (e) => {
        this.setState({inputItem: e.target.value})
    }

    filterCompleted = (e) => {
        e.preventDefault();
        this.props.filterCompleted()
    }

    showAll = (e) => {
        e.preventDefault();
        this.props.showAll()
    }

    componentDidMount() {
        let todoFromStorage = JSON.parse(localStorage.getItem("todo"))
        if(todoFromStorage !== null)
            this.props.fromLocalStorage(todoFromStorage);
    }
    
    render(){
        return(
            <div className = "App">
                <TodoList />
                <form onSubmit={(e) => this.submitItem(e)}>
                    <input 
                        label = "Add New Item"
                        onChange = {this.changeHandler}
                        name = "item"
                        value={this.state.inputItem}
                    />
                    <input
                        name="submit"
                        type="Submit"
                    />
                </form>
                <button onClick = {this.filterCompleted}>Show Uncompleted</button>
                <button onClick = {this.showAll}>Show All</button>
                <button onClick = {this.props.deleteCompleted}>Delete Completed</button>
            </div>
        )
    }
  
}

const mapDispatchToProps = {
    addItem,
    filterCompleted,
    showAll,
    deleteCompleted,
    fromLocalStorage
}

export default connect(null, mapDispatchToProps)(App)
