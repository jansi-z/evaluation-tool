import { GET_BATCH } from '../actions/batches/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_BATCH :
      return payload

    default :
      return state
  }
}
