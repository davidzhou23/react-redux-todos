
import { VisibilityFilters } from './toggleTodo'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log('visibilityFilter reducer');
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter