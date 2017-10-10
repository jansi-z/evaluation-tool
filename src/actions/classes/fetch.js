import API from '../../api'

export const FETCHED_CLASSES = 'FETCHED_CLASSES'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('classes')

    api.authenticate()
      .then(() => {
        backend.find({
          query: {
            $sort: {
              startDate: -1,
            },
          }
        })
          .then((result) => {
            dispatch({
              type: FETCHED_GAMES,
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
              type: FETCHED_GAMES,
              payload: result.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
