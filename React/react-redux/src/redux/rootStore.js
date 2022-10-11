import {combineReducers} from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { iceCReamReducer } from './iceCream/iceCreamReducer'
import { userReducer } from './user/userReducer'
export const rootStore=combineReducers({cake:cakeReducer,iceCream:iceCReamReducer,user:userReducer})

