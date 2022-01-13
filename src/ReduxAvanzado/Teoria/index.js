import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts, fetchPostsIfNeeded } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // nos permite despachar funciones
        loggerMiddleware // buen middleware que registra las acciones
    )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
    console.log(store.getState())
    )
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
console.log(store.getState())
) 
