import API from '../../api'

export const GET_STUDENT = 'GET_STUDENT'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.get(studentId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_STUDENT,
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
