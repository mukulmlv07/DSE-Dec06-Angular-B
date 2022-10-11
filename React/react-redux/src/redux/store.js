import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { cakeReducer } from './cake/cakeReducer'
import logger from 'redux-logger'
import { rootStore } from './rootStore'
export const store=createStore(rootStore,applyMiddleware(logger,thunk))
