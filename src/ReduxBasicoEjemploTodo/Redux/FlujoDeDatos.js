// 1. Haces una llamada a store.dispatch(action).

// { type: 'LIKE_ARTICLE', articleId: 42 }
// { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'María' } }
// { type: 'ADD_TODO', text: 'Leer la documentación de Redux.' }

// 2. El store en Redux invoca a la función reductora que le indicaste.


//  // El estado actual de aplicación (listado de asuntos pendientes y un filtro)
//  let previousState = {
//     visibleTodoFilter: 'SHOW_ALL',
//     todos: [ 
//       {
//         text: 'Leer la documentación.',
//         complete: false
//       }
//     ]
//   }
 
//   // La acción que se está realizando (agregando un asunto)
//   let action = {
//     type: 'ADD_TODO',
//     text: 'Entendiendo el flujo.'
//   }
 
//   // Tu reductor devuelve el siguiente estado de aplicación
//   let nextState = todoApp(previousState, action)

// 3. El reductor raíz puede combinar la salida de múltiples reductores en un único árbol de estado.
// function todos(state = [], action) {
//     // Calcularlo de alguna manera...
//     return nextState
//   }
 
// function visibleTodoFilter(state = 'SHOW_ALL', action) {
// // Calcularlo de alguna manera...
// return nextState
// }

// let todoApp = combineReducers({
// todos,
// visibleTodoFilter
// })

// Cuando usted emite una acción, todoApp devuelta por combineReducers llamará a ambos reductores:
// let nextTodos = todos(state.todos, action)
// let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)

// A continuación se combinará ambos conjuntos de resultados en un único árbol de estado:
// return {
//   todos: nextTodos,
//   visibleTodoFilter: nextVisibleTodoFilter
// }

// 4. El store en Redux guarda por completo el árbol de estado devuelto por el reductor raíz.

