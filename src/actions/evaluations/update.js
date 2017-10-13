import API from '../../api'

export const EVALUATION_UPDATED = 'EVALUATION_UPDATED'

const api = new API()

export default (evaluationId, evaluationData) => {
  return (dispatch) => {

    const backend = api.service('evaluations')

    api.authenticate()
      .then(() => {
        backend.patch(evaluationId, evaluationData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: EVALUATION_UPDATED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
