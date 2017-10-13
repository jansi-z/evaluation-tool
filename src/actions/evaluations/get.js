import API from '../../api'

export const GET_EVALUATION = 'GET_EVALUATION'

const api = new API()

export default (evaluationId) => {
  return (dispatch) => {

    const backend = api.service('evaluations')

    api.authenticate()
      .then(() => {
        backend.get(evaluationId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_EVALUATION,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
