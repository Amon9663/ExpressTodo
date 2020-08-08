import axios from 'axios'

const API_URL = `http://localhost:8080/tasks/`

export const getTodos = () =>{
    return axios.get(
        API_URL,
        {
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => {
            return res.data
        })
}

export const createTodo = (name,due_date) => {
    return axios.post(
        API_URL,
        {
            name: name,
            due_date: due_date,
        },
        {
            headers: {'Content-Type': 'application/json'}
        }
        )
        .then(function(response){
            console.log(response)
        })
}

export const updateTodoStatus = (id,status) => {
    return axios.put(
        `${API_URL}${id}`,
        {
            status: status
        },
        {
            headers: {'Content-Type': 'application/json'}
        }
        )
        .then(function(response){
            console.log(response)
        })
    
}

export const updateTodo = (id,name) => {
    return axios.put(
        `${API_URL}${id}`,
        {
            name: name,
           
        },
        {
            headers: {'Content-Type': 'application/json'}
        }
        )
        .then(function(response){
            console.log(response)
        })
    
}



export const deleteTodo = (taskId)=>{
    return axios.delete(
        `${API_URL}${taskId}`,
        {
            headers: {'Content-Type':'application/json' }
        })
        .then(function(response){
            console.log(response)
        })
        .then(function (error){
            console.log(error)
        })

    }

