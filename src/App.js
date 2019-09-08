import React, { Component } from 'react'
import './App.css';
import Todos from './components/Todos/Todos'
import Error from './components/Error/Error'
import AddTodo from './components/Todos/AddTodo/AddTodo'
import EditTodo from './components/Todos/EditTodo/EditTodo'
import DetailsTodo from './components/Todos/DetailsTodo/DetailsTodo'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




class App extends Component {

  render() {
    return (
       <Router>
        <h2>Todo Application</h2>
        <Switch>
          <Route exact path='/' component={Todos} />
          {/* <Route exact path='/:id' component={Todo} /> */}
          <Route exact path='/addtodo' component={AddTodo} />
          <Route exact path='/edittodo/:id' component={EditTodo} />
          <Route exact path='/detailstodo/:id' component={DetailsTodo} /> 
          <Route component={Error} />
          
        </Switch>
        {/* <AddTodo />
        <EditTodo /> */}
        </Router>
   
  );
  }
}

export default App