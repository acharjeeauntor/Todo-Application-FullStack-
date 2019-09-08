import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodo } from '../../../actions/todoActions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class DetailsTodo extends Component {
     componentDidMount() {
    const { id } = this.props.match.params
    this.props.getTodo(id)
  }

     // http://localhost:8080/todo/1
     render() {
 const {todo} = this.props
          return (
                    <div className=" container card text-white 
                    bg-secondary mt-5" style={{maxWidth:'30rem'}}>
                    <div className="card-header">{todo.todo}</div>
                         
  <div className="card-body">
     <p className="card-text">{todo.extodo}</p>
                    </div>
                    <Link to="/" className="btn">Go Back To Home</Link>
</div>
          )
     }
}

DetailsTodo.propTypes = {
     getTodo:PropTypes.func.isRequired
}


const mapStateToProps = (state) =>({
     todo:state.todo.todo
})

export default connect(mapStateToProps,{getTodo})(DetailsTodo)