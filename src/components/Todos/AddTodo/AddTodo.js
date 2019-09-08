import React, { Component } from 'react';
import Input from '../../Input/Input';
import { addTodo } from '../../../actions/todoActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import{Link} from 'react-router-dom'
import './AddTodo.css'


class AddTodo extends Component {
     state = {
       todo: '',
       extodo: '',
       errors:''
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {todo,extodo } = this.state;

    // Check For Errors
    if (todo === '') {
      this.setState({ errors:'Todo is required'});
      return;
    }

     const newTodo = {todo, extodo };
       
       //Submit Todo
    this.props.addTodo(newTodo)

    // Clear State
       this.setState({
         todo: '',
         extodo:'',
          errors:''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { todo,errors } = this.state;

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
                value={this.state.extodo}
                name="extodo"
               onChange={this.onChange}>                            
           </textarea>
           </div>

            <input
              type="submit"
              value="Add Todo"
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

AddTodo.propTypes = {
  addTodo:PropTypes.func.isRequired
}

export default  connect(null,{addTodo})(AddTodo)

