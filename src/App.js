import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import UseStateSinObjs from './TodoSobreEstados/ActualizacionesNoCombinadasObjs'
import UseStateObjs from './TodoSobreEstados/ActualizacionesNoCombinadasObjs'
import UseOfUseMemo from './TodoSobreEstados/UseOfUseMemo'
import UseOfUseRef from './TodoSobreEstados/UseOfUseRef'
import ActualizacionesDeEstadoDebenSerInmutables from './TodoSobreEstados/ActualizacionesDeEstadoDebenSerInmutables'
import EstadoObsoletoPuedeOcurrirConLosClosures from './TodoSobreEstados/EstadoObsoletoPuedeOcurrirConLosClosures'
import EstadoObsoletoPuedeOcurrirConLosClosuresSolucion from './TodoSobreEstados/EstadoObsoletoPuedeOcurrirConLosClosuresSolucion'

import AppRedux from './ReduxBasicoEjemploTodo/AppRedux'

const Estados = () => (<><h1>Lo que todo desarrollador de React debe saber sobre el estado</h1><UseStateObjs /><UseStateSinObjs /><UseOfUseMemo /><UseOfUseRef /><ActualizacionesDeEstadoDebenSerInmutables /><EstadoObsoletoPuedeOcurrirConLosClosures /><EstadoObsoletoPuedeOcurrirConLosClosuresSolucion /></>)

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Link to="/">Inicio</Link><br />
        <Link to="/estados">Lo que todo desarrollador de React debe saber sobre el estado</Link><br />
        <Link to="/redux">Redux Nivel Basico ejemplo Todo</Link>
        <Routes>
          <Route element={<h1>Pagina de Inicio</h1>} path='/' />
          <Route element={<Estados />} path='/estados' />
          <Route element={<AppRedux />} path='/redux' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
