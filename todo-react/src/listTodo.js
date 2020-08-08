import React, {Component} from 'react'
import { getTodos, deleteTodo,updateTodo,updateTodoStatus} from './APIHelper'
import trash from './trash.png'
import moment from 'moment'
import AddTodo from './addTodo'
import './App.css'


class List extends Component{
constructor(){
    super ()
    this.state = {
        todos:[],
    }
    this.toggleCheck = this.toggleCheck.bind(this);
}

componentDidMount(){
    this.getList()
}


getList = () => { 
    getTodos().then(data => {
        this.setState(
            {
                todos:[...data]
            },
            ()=> {
                console.log(this.state.todos)
            }
        )
    })
}

checkBool =(e)=>{
    if (e ==='todo'){
        return false;
    }else if (e === 'done'){
        return true;
    }
}

toggleCheck = (id,status) => {
    
    if(status === 'done'){
        updateTodoStatus(id,'todo') 
        .then(()=> {
            this.getList()
        })
    }else if(status === 'todo'){
        updateTodoStatus(id,'done')
        .then(()=> {
            this.getList()
        })
    }
   
}

handleDelete = (del,e) => {
    e.preventDefault()
    deleteTodo(del).then(()=>{
        this.getList()
    })
}

componentDidUpdate(){
    this.getList()
}

updateName = (id,task) =>{
    
    let getName = prompt('Update Task',`${task}`)
    if (getName === null){
        getName= task
    }
    updateTodo(id,getName).then(()=>
    this.getList()
    )
}


    render(){
        return(
        <div>
            <AddTodo />
            <table>
                <tbody>

               
                {this.state.todos.map((todo,index)=>(
                    <tr key={index} >
                        
                        <td><input type="checkbox" 
                        className="check"
                        checked={this.checkBool(todo.status[0])} 
                        onChange={this.toggleCheck.bind(this,todo._id,todo.status[0])}
                        /></td>
                        <td>
                        <p className="tasks" onClick={this.updateName.bind(this,todo._id,todo.name)}>{todo.name}</p>
                        </td>
                        <td>
                         <p className="tasks">Due: {moment(todo.due_date).format("MMM Do YY")}</p>
                        </td>
                        <td>
                        <button onClick={this.handleDelete.bind(this,todo._id )} className="delbutton"><img className="delpng" src={trash} /></button>
                        </td>
                    </tr>
                ))}

            </tbody>
                </table>

        </div>
    )
    }


}

export default List;
