import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import list from './list'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  list
})

export default todoApp