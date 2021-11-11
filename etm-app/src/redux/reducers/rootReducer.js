import { combineReducers } from 'redux'
import { cardReducer } from './cardReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers({
  cardReducer,
  filterReducer,
})
