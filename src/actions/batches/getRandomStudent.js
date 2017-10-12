import API from '../../api'

export const RANDOM_STUDENT = 'RANDOM_STUDENT'

const api = new API()

export default (batchId, students) => {
  return (dispatch) => {

    const backend = api.service('batches')

    api.authenticate()
      .then(() => {
        backend.patch(batchId, { type: RANDOM_STUDENT, payload: students })
          .then((result) => {
            dispatch({
              type: RANDOM_STUDENT,
              payload: result
            })
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
