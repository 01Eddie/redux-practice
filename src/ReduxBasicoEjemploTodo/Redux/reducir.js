// {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//       {
//         text: 'Consider using Redux',
//         completed: true,
//       },
//       {
//         text: 'Keep all state in a single tree',
//         completed: false
//       }
//     ]
//   }

// (previousState, action) => newState

// import { VisibilityFilters } from './actions'

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }

// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }

//   // Por ahora, no maneja ninguna acción
//   // y solo devuelve el estado que recibimos.
//   return state
// }

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     default:
//       return state
//   }
// }

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       })    
//     default:
//       return state
//   }
// }

// case COMPLETE_TODO:
//   return Object.assign({}, state, {
//     todos: state.todos.map((todo, index) => {
//       if (index === action.index) {
//         return Object.assign({}, todo, {
//           completed: true
//         })
//       }
//       return todo
//     })
//   })

//   function todoApp(state = initialState, action) {
//       switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//           return Object.assign({}, state, {
//             visibilityFilter: action.filter
//           })
//         case ADD_TODO:
//           return Object.assign({}, state, {
//             todos: [
//               ...state.todos,
//               {
//                 text: action.text,
//                 completed: false
//               }
//             ]
//           })
//         case COMPLETE_TODO:
//           return Object.assign({}, state, {
//             todos: state.todos.map((todo, index) => {
//               if(index === action.index) {
//                 return Object.assign({}, todo, {
//                   completed: true
//                 })
//               }
//               return todo
//             })
//           })
//         default:
//           return state
//       }
//     }

//     function todos(state = [], action) {
//       switch (action.type) {
//         case ADD_TODO:
//           return [
//             ...state,
//             {
//               text: action.text,
//               completed: false
//             }
//           ]
//         case COMPLETE_TODO:
//           return state.map((todo, index) => {
//             if (index === action.index) {
//               return Object.assign({}, todo, {
//                 completed: true
//               })
//             }
//             return todo
//           })
//         default:
//           return state
//       }
//     }
    
//     function todoApp(state = initialState, action) {
//       switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//           return Object.assign({}, state, {
//             visibilityFilter: action.filter
//           })
//         case ADD_TODO:
//         case COMPLETE_TODO:
//           return Object.assign({}, state, {
//             todos: todos(state.todos, action)
//           })
//         default:
//           return state
//       }
//     }

//     function visibilityFilter(state = SHOW_ALL, action) {
//       switch (action.type) {
//       case SET_VISIBILITY_FILTER:
//         return action.filter
//       default:
//         return state
//       }
//     }


// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case COMPLETE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: true
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// import { combineReducers } from 'redux'

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp

// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }             
// }

// const reducer = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c
// })

// function reducer(state = {}, action) {
//   return {
//     a: doSomethingWithA(state.a, action),
//     b: processB(state.b, action),
//     c: c(state.c, action)
//   }
// }

// import { combineReducers } from 'redux'
// import * as reducers from './reducers'

// const todoApp = combineReducers(reducers)