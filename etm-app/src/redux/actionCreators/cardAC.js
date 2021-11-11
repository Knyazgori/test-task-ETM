import { GET_CARD } from "../actionTypes/cardAT.js"

export const getCardAC = (payload) => {
  return {
    type: GET_CARD, 
    payload
  }
}
