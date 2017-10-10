import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import superagent from 'superagent'
import io from 'socket.io-client/dist/socket.io'
import socketio from 'feathers-socketio/client'

const FEATHERS_TOKEN_KEY = 'recipes-api'
const host = 'http://localhost:3030'

const socket = io(host, {
  transports: ['websocket']
})

const feathersClient = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(auth({
    storage: window.localStorage,
    storageKey: FEATHERS_TOKEN_KEY,
  }))

export default feathersClient
