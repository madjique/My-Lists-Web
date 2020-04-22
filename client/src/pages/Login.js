import React from 'react'
const Login = () => {
    return (
        <div className="Login">
            <h1>My Lists</h1>
            <div className="container">
                <h1>Log in</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <button>Sign up</button>
        </div>
    )
}

export default Login
