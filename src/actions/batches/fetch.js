import API from '../../api'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('batches')

    api.authenticate()
      .then(() => {
        backend.find({
          query: {
            $sort: {
              startDate: 1,
            },
          }
        })
          .then((result) => {
            console.log(result)
            dispatch({
              type: FETCHED_BATCHES,
              payload: result.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        backend.find()
          .then((result) => {
            dispatch({
              type: FETCHED_BATCHES,
              payload: result.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
