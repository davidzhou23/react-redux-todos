import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {VisibilityFilters, toggleTodo} from '../redux/toggleTodo';

const getVisibleTodos = (todos, filterType) => {
    console.log('getVisibleTodos')
    console.log('todos params:')
    console.log(todos)
    switch (filterType) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVATE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filterType)
    }
  }

const TodoList = (props) => {
    console.log('TodoList')
    const { todos, toggleTodo } = props;
    return (<ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
      </ul>)
}
  

const Todo = ({ onClick, completed, text}) => {
    console.log('todo item text:' + text)
    return (
        <li
          onClick={onClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
    )
}


const mapStateToProps = (state, ownedProps) => {
    console.log('VisibleTodoList mapStateToProps')
    console.log(state, ownedProps)
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
  
const mapDispatchToProps = dispatch => {
    console.log('VisibleTodoList mapDispatchToProps')
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

  Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);