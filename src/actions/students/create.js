import API from '../../api'

export const STUDENT_ADDED = 'STUDENT_ADDED'

const api = new API()

export default (studentData) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.create(studentData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: STUDENT_ADDED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
