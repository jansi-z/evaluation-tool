import API from '../../api'

export const STUDENT_UPDATED = 'STUDENT_UPDATED'

const api = new API()

export default (studentId, studentData) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.patch(studentId, studentData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: STUDENT_UPDATED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
