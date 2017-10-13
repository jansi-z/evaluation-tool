import { GET_EVALUATION } from '../actions/evaluations/get'
import { EVALUATION_UPDATED } from '../actions/evaluations/update'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_EVALUATION :
      return payload

    case EVALUATION_UPDATED :
      return payload

    default :
      return state
  }
}
