import { FETCHED_BATCHES } from '../actions/batches/fetch'
import {
  BATCH_CREATED,
  BATCH_UPDATED,
  BATCH_REMOVED
} from '../actions/batches/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_BATCHES :
      return [ ...payload ]

    case BATCH_CREATED :
      const newGame = { ...payload }
      return [newGame].concat(state)

    case BATCH_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case BATCH_REMOVED :
        return state.filter((batch) => (batch._id !== payload._id))

    default :
      return state

  }
}
