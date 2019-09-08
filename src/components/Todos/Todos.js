import React,{Component} from 'react'
import Todo from './Todo/Todo'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { getTodos } from '../../actions/todoActions'
import './Todos.css'
import PropTypes from 'prop-types'


class Todos extends Component{

 componentDidMount() {
    this.props.getTodos()
     }
     

     render() {
          const { todos } = this.props
        const singleTodo = todos.length === 0 ?
               (<p className="noTodo"><b>No Todo Here!</b></p>)
               :(todos.map(todo =>(
                    <Todo state={this.state}
                    todos={todo} key={todo.id} />)))

      return (
             <React.Fragment>
                 <Button />
                    <h4 style={{ textAlign: 'center',color:'darkred'}}>Todos:</h4>
                    {singleTodo}                   
               </React.Fragment>
      )
     }
}

Todos.propTypes = {
     getTodos:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
  todos: state.todo.todos
})


export default connect(mapStateToProps,{getTodos})(Todos)
