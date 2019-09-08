import React, { Component } from 'react'
import './Todo.css'
import { Link}from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTodo } from '../../../actions/todoActions'
import PropTypes from 'prop-types'


class Todo extends Component {

        deleteATodo = (id) => {
          this.props.deleteTodo(id)  
     }

     render() {
          
          const { todos } = this.props
       
     // this is use only knowing how to access params from route.params can be a id or name or others
     //   here use id => localhost:3000/:id        
     //      console.log(this.props.match.params.id)
     //   here use id => localhost:3000/:name       
     //      console.log(this.props.match.params.name)  
     
        return (
              <div className="container">
                    <div className="card">
                         <div className="card-body">
                           <p className="card-text">
                     <Link className="singleTodo" to={`/detailstodo/${todos.id}`}>
                         {todos.todo}
                       </Link>
                  <Link to={`/edittodo/${todos.id}`}><i className="fas fa-edit"></i></Link>  
             <i class="fas fa-trash" onClick={()=>this.deleteATodo(todos.id)}></i>
            </p>
          </div>
           </div>
           </div> 
          )
     }
}

Todo.propTypes = {
     deleteTodo:PropTypes.func.isRequired
}

export default connect(null,{deleteTodo})(Todo)