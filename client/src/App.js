import React , { Fragment , useState ,useEffect} from 'react'
import {BrowserRouter as Router , Switch , Redirect, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from'./pages/SignUp'

function App() {
  const [log, setlog] = useState(false)
  const [token,settoken]=useState()
  const strtkn = localStorage.getItem('myliststoken')
  useEffect(() => {
      if (strtkn) {
        settoken(strtkn) 
        setlog(true)
      }  
  }, [strtkn])
  return (
    <Fragment>
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup setlog={setlog} setoken={settoken}/> 
            </Route>
            <Route path="/Dashboard">
              {log ? <Dashboard token={token}/>: <Redirect to="/login"/>} 
            </Route>
            <Route path="/login">
              {
                log ? <Redirect to="/Dashboard"/> : <Login setlog={setlog} setoken={settoken}/> 
              }
            </Route>
            <Route path="/">
                <Redirect to="/login"/>
            </Route>
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
