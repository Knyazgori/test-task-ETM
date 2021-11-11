import { CHANGE_FILTER } from "../actionTypes/filterAT.js";


const initialState = { filter: 'По возрастанию цены' }

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.payload }
    default:
      return state
  }
}
