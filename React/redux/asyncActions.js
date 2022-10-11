
const redux = require('redux')
const axios = require('axios')
const reduxLogger = require('redux-logger')
const thunkReduxMiddleware = require('redux-thunk').default

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        data: [],
        error: ''
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      }

  }
}

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      users = res.data.map(user => user.id)
      dispatch(fetchUserSuccess(users))
    }).catch(error => {
      dispatch(fetchUserFailure(error.message))
    })
  }
}

const store = redux.createStore(reducer, redux.applyMiddleware(thunkReduxMiddleware, reduxLogger.createLogger()))
store.subscribe(() => {/*console.log(store.getState())*/ })
store.dispatch(fetchUsers())
