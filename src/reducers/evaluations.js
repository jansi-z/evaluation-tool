import { FETCHED_EVALUATIONS } from '../actions/evaluations/fetch'
import { STUDENT_EVALUATED } from '../actions/evaluations/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_EVALUATIONS :
      return [ ...payload ]

    case STUDENT_EVALUATED :
      const newEvaluation = { ...payload }
      return [newEvaluation].concat(state)

    // case EVALUATION_DELETED :
    //     return state.filter((evaluation) => (evaluation._id !== payload._id))

    default :
      return state

  }
}
