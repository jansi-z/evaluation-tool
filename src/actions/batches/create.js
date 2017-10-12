import API from '../../api'

export const BATCH_ADDED = 'BATCH_ADDED'

const api = new API()

export default (batchData) => {
  return (dispatch) => {

    const backend = api.service('batches')

    api.authenticate()
      .then(() => {
        backend.create(batchData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: BATCH_ADDED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
