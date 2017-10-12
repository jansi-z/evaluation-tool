import { GET_BATCH } from '../actions/batches/get'
import { RANDOM_STUDENT } from '../actions/batches/getRandomStudent'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case RANDOM_STUDENT :
      return payload

    case GET_BATCH :
      return payload

    default :
      return state
  }
}
