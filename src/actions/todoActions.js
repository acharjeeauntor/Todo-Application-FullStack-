import { GET_TODOS,DELETE_TODO,DELETE_TODOS,ADD_TODO,GET_TODO,UPDATE_TODO} from './type'
import axios from 'axios'
export const getTodos = () => dispatch => {
     axios.get(`http://localhost:8080/todo`)
          .then(res => {
               dispatch({
                    type: GET_TODOS,
                    payload:res.data
               })
          })
          .catch(err=>console.log(err))
   
}

export const getTodo = (id) =>dispatch=> {
     axios.get(`http://localhost:8080/todo/${id}`)
          .then(res => {
               dispatch({
          type: GET_TODO,
          payload:res.data
     })
          })
     .catch(err=>console.log(err))
     
}

export const deleteTodo = (id) => dispatch=>{
     axios.delete(`http://localhost:8080/delete/${id}`)
          .then(res => {
           dispatch({
          type: DELETE_TODO,
          payload:id
     }) 
          })
     .catch(err=>console.log(err))
     
}
export const deleteTodos = () => dispatch=>{
     axios.delete(`http://localhost:8080/delete`)
          .then(res => {
           dispatch({
          type: DELETE_TODOS
     }) 
          })
     .catch(err=>console.log(err))
     
}

export const addTodo = (todo) =>dispatch=>{
     axios.post(`http://localhost:8080/post`, todo)
          .then(res => {
          dispatch({
          type: ADD_TODO,
          payload:res.data
     })
          })
          .catch(err => console.log(err))
    
}

export const updateTodo = (todo) => dispatch => {
     //console.log(todo.id)
     axios.put(`http://localhost:8080/update/${todo.id}`,todo)
          .then(res => {
               //console.log(res.data)
               dispatch({
          type: UPDATE_TODO,
                    payload:res.data
               })
          })
     .catch(err=>console.log(err))
     
}