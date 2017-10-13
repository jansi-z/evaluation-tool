import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { STUDENT_ADDED } from '../actions/students/create'
import { STUDENT_DELETED } from '../actions/students/delete'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_STUDENTS :
      return [ ...payload ]

    case STUDENT_ADDED :
      const newStudent = { ...payload }
      return [newStudent].concat(state)

    case STUDENT_DELETED :
        return state.filter((student) => (student._id !== payload._id))

    default :
      return state

  }
}
