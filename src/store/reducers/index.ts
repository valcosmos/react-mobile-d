import { combineReducers } from 'redux'

function test(state = 0, action) {
  return state
}
function user(state = { name: 'zhangsan' }, action) {
  return state
}

const reducer = combineReducers({
  test,
  user
})

export default reducer
