import API from '../../api'

export const EVALUATE = 'EVALUATE'

const api = new API()

export default (studentId, evaluationData) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.patch(studentId, { type: EVALUATE, payload: evaluationData})
          .then((results) => {
            console.log(results)
            dispatch({ type: EVALUATE, payload: results})
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
