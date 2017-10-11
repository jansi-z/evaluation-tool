import { GET_STUDENT } from '../actions/students/get'
import { STUDENT_EVALUATED } from '../actions/evaluations/create'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_STUDENT :
      return payload

    case STUDENT_EVALUATED :
      return payload

    default :
      return state
  }
}
