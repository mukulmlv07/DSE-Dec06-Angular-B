const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const initialState = {
  loading: false,
  users: [],
  error: ''

}

const fetchUserRequest = () => { 
  return {
    type: FETCH_USER_REQUEST
  };
};

const fetchUserSuccess = (users) => { 
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  };
};

const fetchUserFailure = (error) => { 
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

const reducer = (state = initialState, action) => { 
  switch (action.type) { 
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload
      }
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
};

const fetchUser = () => { 
  return function (dipatch) { 
    dipatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      dipatch(fetchUserSuccess(res.data));
    }
    ).catch(err => { 
      dipatch(fetchUserFailure(err))
    })
  };
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchUser())