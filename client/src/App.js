import React , { Fragment , useState} from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


function App() {
  const [log, setlog] = useState(false)
  const [token,settoken]=useState()
  return (
    <Fragment>
      { 
        (!log) ? <Login setlog={setlog} setoken={settoken}/> : <Dashboard token={token}/>
      }
    </Fragment>
  );
}

export default App;
