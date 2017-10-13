import API from '../../api'

export const STUDENT_DELETED = 'STUDENT_DELETED'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.remove(studentId)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: STUDENT_DELETED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
