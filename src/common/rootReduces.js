import {combineReducers} from 'redux';
import {todos} from '../components/redux/addTodos';
import visibilityFilter from '../components/redux/visibilityFilter';

export default combineReducers({todos, visibilityFilter});