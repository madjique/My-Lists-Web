import React , {useState , Fragment} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    const {setlog,setoken} = props
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    const [ErrMsg, setErrMsg] = useState("")
    const [redi, setredi] = useState()
    const handleChange = (event) => {
        if (event.target.name === 'Username')
            setUsername(event.target.value) 

        else
             setPassword(event.target.value)
    }

    const login = async () => {
        await axios.post('http://localhost:8080/auth/login',
        {        
            Username : Username,
            Password : Password              
        })
        .then(res => {
                setoken(res.data)
                localStorage.setItem('myliststoken',res.data)
                setlog(true)  
                setredi("/Dashboard")                 
        })
        .catch(res => console.log(res))
    }
    const tosign = () => setredi("/signup")

    return (
        <Fragment>
        {
            redi ? <Redirect to={redi}/> :
            <div className="Login">
                <h1>My Lists</h1>
                <div className="container">
                    <h1>Log in</h1>
                    {ErrMsg ? <p style={{"color" : "#AA0000" , "margin" : "auto"}}>{ErrMsg}</p> : null}
                    <form>
                        <input type="text" placeholder="Username" value={Username} name="Username" onChange={handleChange}/>
                        <input type="password" placeholder="Password" value={Password} name="Password" onChange={handleChange}/>
                    </form>
                    <button onClick={login}>Login</button>
                </div>
                <button onClick={tosign} >Sign up</button>
            </div>
        }
        </Fragment>    
    )
}

export default Login
