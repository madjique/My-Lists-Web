import React , { Fragment , useState ,useEffect} from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


function App() {
  const [log, setlog] = useState(false)
  const [token,settoken]=useState()
  useEffect(() => {
      const strtkn = localStorage.getItem('myliststoken')
      if (strtkn) {
        settoken(strtkn) 
        setlog(true)  
      }  
  }, [])
  return (
    <Fragment>
      { 
        (!log) ? <Login setlog={setlog} setoken={settoken}/> : <Dashboard token={token}/>
      }
    </Fragment>
  );
}

export default App;
