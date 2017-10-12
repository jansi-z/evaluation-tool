import API from '../../api'

export const BATCH_DELETED = 'BATCH_DELETED'

const api = new API()

export default (batchId) => {
  return (dispatch) => {

    const backend = api.service('batches')

    api.authenticate()
      .then(() => {
        backend.remove(batchId)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: BATCH_DELETED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
