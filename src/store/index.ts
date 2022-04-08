// 创建 store

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-chunk'

import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
