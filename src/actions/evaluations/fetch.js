import API from '../../api'

export const FETCHED_EVALUATIONS = 'FETCHED_EVALUATIONS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('evaluations')

    api.authenticate()
      .then(() => {

        backend.find({
          query: {
            $sort: {
              studentId: 1,
            },
          }
        })
          .then((result) => {
            console.log(result)
            dispatch({
              type: FETCHED_EVALUATIONS,
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
              type: FETCHED_EVALUATIONS,
              payload: result.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
