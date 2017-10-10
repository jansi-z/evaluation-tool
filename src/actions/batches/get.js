import API from '../../api'

export const GET_BATCH = 'GET_BATCH'

const api = new API()

export default (batchId) => {
  return (dispatch) => {

    const backend = api.service('batches')

    api.authenticate()
      .then(() => {
        backend.get(batchId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_BATCH,
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
