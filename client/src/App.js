import React , { Fragment , useState} from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


function App() {
  const [log, setlog] = useState(false)
  return (
    <Fragment>
      { 
        (!log) ? <Login setlog={setlog}/> : <Dashboard/> 
      }
    </Fragment>
  );
}

export default App;
