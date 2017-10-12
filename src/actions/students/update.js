import API from '../../api'

export const STUDENT_UPDATED = 'STUDENT_UPDATED'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'

const api = new API()

export default (studentId, studentData) => {
  return (dispatch) => {

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.patch(studentId, { type: UPDATE_STUDENT, payload: studentData })
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
