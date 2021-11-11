import { CHANGE_FILTER } from "../actionTypes/filterAT.js"

export const changeFilterAC = (payload) => {
  return {
    type: CHANGE_FILTER, 
    payload
  }
}
