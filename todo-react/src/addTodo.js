import React, {Component} from 'react';
import './App.css'

import {createTodo }from "./APIHelper"

class AddTodo extends Component{
constructor(props){
    super(props);
    this.state = {
        added:false,
        value:'',
        dueDate: '',
    }

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeText = e => {
    this.setState({value: e.target.value})
}

handleChangeDate = e =>{
    this.setState({
        dueDate: e.target.value
    })
    console.log(this.state.dueDate)
    
}



handleSubmit = e => {
    e.preventDefault()
    createTodo(this.state.value,this.state.dueDate);
   

}


render() {
        return( 
            <div  className="Input">
                <span>
                New Task: 
                </span>
                <input type="text" value={this.state.value} onChange={this.handleChangeText} className="InputBox"/>
                <input type="date" value={this.state.dueDate} onChange={this.handleChangeDate} className="InputDate" />
                <button onClick={this.handleSubmit} className="AddButton">Add</button>
            </div> 
        );
    }


}

export default AddTodo;