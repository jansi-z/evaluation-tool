import API from '../../api'

export const CREATE_EVALUATION = 'CREATE_EVALUATION'

const api = new API()

export default (evaluationData) => {
  return (dispatch) => {

    const backend = api.service('evaluations')

    api.authenticate()
      .then(() => {
        backend.create(evaluationData)
          .then((results) => {
            console.log(results)
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
