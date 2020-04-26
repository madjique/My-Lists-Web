import React , {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    const setlog = props.setlog
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    const [ErrMsg, setErrMsg] = useState("")

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
                setlog(true)                   
        })
        .catch(res => setErrMsg(res))
    }
    
    return (
        <div className="Login">
            <h1>My Lists</h1>
            <div className="container">
                <h1>Log in</h1>
                <p style={{Color : "red"}} value={ErrMsg}></p>
                <form>
                    <input type="text" placeholder="Username" value={Username} name="Username" onChange={handleChange}/>
                    <input type="password" placeholder="Password" value={Password} name="Password" onChange={handleChange}/>
                    <button onClick={login}>Login</button>
                </form>
            </div>
            <button onClick={login} >Sign up</button>
        </div>
    )
}

export default Login
