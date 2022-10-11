const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const redux = require('redux')
const reduxLogger=require('redux-logger')

const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

const initialCakeState = {
  numOfCake: 10
}

const initialIceCreamState = {
  numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
    default:
      return state
  }
}

const rootStore = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = redux.createStore(rootStore,redux.applyMiddleware(reduxLogger.createLogger()))

const unsubscribe = store.subscribe(() => {
  
})

store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())


unsubscribe()