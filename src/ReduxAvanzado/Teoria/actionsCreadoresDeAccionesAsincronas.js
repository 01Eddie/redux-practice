import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// He aqui nuestro primer creador thunk action!
// Aunque internamente son diferentes, lo usarás como cualquier otro creador de acción:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {

  // Thunk middleware sabe como manejar funciones.
  // Pasa el método de despacho como un argumento a la función,
  // haciéndolo así capaz de despachar las acciones por sí mismo.

  return function (dispatch) {

    // Primer envío: se actualiza el estado de la aplicación para informar
    // que la llamada al API está iniciando.

    dispatch(requestPosts(subreddit))

    // La función llamada por el middleware thunk puede devolver un valor,
    // que se transmite como el valor de retorno del método de envío.

    // En este caso, devolvemos una promesa para esperar por la respuesta.
    // Esto no es requerido por middleware thunk, pero es conveniente para nosotros.

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json =>

        // ¡Podemos despachas muchas veces!
        // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.

        dispatch(receivePosts(subreddit, json))
      )

        // En una aplicación del mundo real, también
        // capturamos cualquier error en la llamada de red.
  }
}