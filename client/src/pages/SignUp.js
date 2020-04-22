import React from 'react'

const SignUp = () => {
    return (
        <div className="Signup">
            <h1>My Lists</h1>
            <div className="container">
                <h1>Sign up</h1>
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <p className="sub">By clicking validate you accept <br/><b>Terms of data usage</b></p>
                    <button type="submit">Validate</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
