import { GET_STUDENT } from '../actions/students/get'
import { EVALUATE } from '../actions/students/evaluate'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_STUDENT :
      return payload

    case EVALUATE :
      return payload

    default :
      return state
  }
}
