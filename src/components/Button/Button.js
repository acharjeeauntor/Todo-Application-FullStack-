import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTodos } from '../../actions/todoActions'
import PropTypes from 'prop-types'



class Button extends Component{
     
     deleteAllTodo = () => {
          this.props.deleteTodos()
     }
     render(){
          return (
               <div style={{ textAlign: 'right', margin: '40px' }}>
                    <Link className="btn btn-primary" to="/addtodo">Add Todo</Link>
                    <button style={{marginTop:'2px'}}className="btn btn-success" onClick={this.deleteAllTodo}>Delete All Todo</button>
               </div>
          )
     }
}

Button.propTypes = {
deleteTodos:PropTypes.func.isRequired
}

export default connect(null,{deleteTodos})(Button)
