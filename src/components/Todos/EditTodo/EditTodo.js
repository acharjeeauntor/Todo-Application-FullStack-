import React, { Component } from 'react';
import Input from '../../Input/Input';
import { getTodo,updateTodo} from '../../../actions/todoActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom"
import './EditTodo.css'


class EditTodo extends Component {
     state = {
       todo:'',
       extodo: '',
       errors:''
  };

  componentWillReceiveProps(nextProps,nextState) {
    const { todo,extodo } = nextProps.todo
    this.setState({todo,extodo})
}
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTodo(id)
    
  }
  

  onSubmit = (e) => {
    e.preventDefault();
//console.log(this.props)
    const {todo,extodo } = this.state;

    // Check For Errors
    if (todo === '') {
      this.setState({ errors:'Todo is required'});
      return;
    }
     const { id } = this.props.match.params
     const editTodo = {id,todo, extodo };
       
       //Submit Todo
    this.props.updateTodo(editTodo)

    // Clear State
       this.setState({
         todo: '',
         extodo:'',
          errors:''
       });
    // this.props.history.push('/');

  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { todo,extodo,errors } = this.state;

    return (
       <div className="card cardStyle">
              <div className="card-body">
 {errors&&<div class="alert alert-danger" role="alert"><b>{errors}</b></div>} 
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
          <Input
              label="Todo"
               name="todo"
               type="text"
              placeholder="Enter Todo"
              value={todo}
              onChange={this.onChange}
              error={errors}
           />

              
  <div class="form-group">
           <label for="description">Extra Info</label>
             <textarea class="form-control"
                value={extodo}
                name="extodo"
               onChange={this.onChange}>                            
           </textarea>
           </div>

            <input
              type="submit"
              value="Edit Todo"
              className="btn btn-primary btn-block"
                        />
                        </div>
          </form>
          <Link to="/" className="btn btn-secondary">Go Back To Home</Link>
                   </div>
      </div>
    );
  }
}

EditTodo.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  getTodoTodo:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
 todo:state.todo.todo
})


export default  connect(mapStateToProps,{getTodo,updateTodo})(EditTodo)

