/* {
    todos: [{
      text: 'Comer',
      completed: true
    }, {
      text: 'Hacer ejercicio',
      completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
  }
{ type: 'ADD_TODO', text: 'Ir a nadar a la piscina' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' } */

// function visibilityFilter(state = 'SHOW_ALL', action) {
//     if (action.type === 'SET_VISIBILITY_FILTER') {
//       return action.filter;
//     } else {
//       return state;
//     }
// }

// function todos(state = [], action) {
//     switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([{ text: action.text, completed: false }]);
//     case 'TOGGLE_TODO':
//       return state.map((todo, index) =>
//         action.index === index ?
//           { text: todo.text, completed: !todo.completed } :
//           todo
//      )
//     default:
//       return state;
//     }
//   }

// function todoApp(state = {}, action) {
// return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
// };
// }

// console.log(store.getState())
/* Imprime
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Considerar usar Redux',
      completed: true
    },
    {
      text: 'Mantener todo el estado en un solo árbol',
      completed: false
    }
  ]
}
*/
// store.dispatch({
//   type: 'COMPLETE_TODO',
//   index: 1
// });

// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_COMPLETED'
// });

// import { combineReducers, createStore } from 'redux';

// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false,
//         },
//       ];
//     case 'COMPLETE_TODO':
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({}, state[action.index], {
//           completed: true
//         }),
//         ...state.slice(action.index + 1),
//       ];
//     default:
//       return state;
//   }
// }

// let reducer = combineReducers({ visibilityFilter, todos });
// let store = createStore(reducer);