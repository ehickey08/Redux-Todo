import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from './Components/TodoList'
import {addItem} from './Actions/index'

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
                
            </div>
        )
    }
  
}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(App)
