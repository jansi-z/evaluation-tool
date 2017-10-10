import API from '../../api'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.find({
          query: {
            $sort: {
              name: 1,
            },
          }
        })
          .then((result) => {
            console.log(result)
            dispatch({
              type: FETCHED_STUDENTS,
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
              type: FETCHED_STUDENTS,
              payload: result.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
