import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { STUDENT_ADDED } from '../actions/students/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_STUDENTS :
      return [ ...payload ]

    case STUDENT_ADDED :
      const newStudent = { ...payload }
      return [newStudent].concat(state)

    default :
      return state

  }
}
