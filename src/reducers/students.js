import { FETCHED_STUDENTS } from '../actions/students/fetch'
// import {
//   GAME_CREATED,
//   GAME_UPDATED,
//   GAME_REMOVED
// } from '../actions/games/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_STUDENTS :
      return [ ...payload ]

    // case GAME_CREATED :
    //   const newGame = { ...payload }
    //   return [newGame].concat(state)
    //
    // case GAME_UPDATED :
    //   return state.map((game) => {
    //     if (game._id === payload._id) {
    //       return { ...payload }
    //     }
    //     return game
    //   })
    //
    // case GAME_REMOVED :
    //     return state.filter((game) => (game._id !== payload._id))

    default :
      return state

  }
}
