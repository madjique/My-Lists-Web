import React,{useState, Fragment} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const SignUp = (props) => {
    
    const {setlog,setoken} = props
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    const [PhoneNum, setPhoneNum] = useState()
    const [Email, setEmail] = useState()
    const [FullName, setFullName] = useState()
    const [ErrMsg, setErrMsg] = useState()
    const [redi, setredi] = useState()
    const handleChange = (event) => {
        switch(event.target.name) {
            case "Username": 
                setUsername(event.target.value); break 
            case "Password" :
                setPassword(event.target.value); break 
            case "PhoneNum":
                setPhoneNum(event.target.value); break
            case "Email" :
                setEmail(event.target.value); break
            case "FullName":
                setFullName(event.target.value); break
            default :
                return
        }
    }

    const Sign = async () => {
        await axios.post('http://localhost:8080/auth/SignUp',
        {        
            Username : Username,
            Password : Password,
            Email : Email,
            Phone : PhoneNum,
            Full_Name : FullName             
        })
        .then(res => {
                if(res.data.length < 50)
                    setErrMsg(res.data) 
                else
                {
                    setoken(res.data)
                    localStorage.setItem('myliststoken',res.data)
                    setlog(true)  
                    setredi("/Dashboard")   
                }              
        })
        .catch(res => setErrMsg(res.data))
    }
    return (

        <Fragment>
            {
                redi ? <Redirect to={redi}/> :
                <div className="Signup">
                    <h1>My Lists</h1>
                    <div className="container">
                        <h1>Sign up</h1>
                        <form>
                            {ErrMsg ? <p style={{"color" : "#AA0000" , "margin" : "auto"}}>{ErrMsg}</p> : null}
                            <input type="text" placeholder="Full Name" value={FullName} name="FullName" onChange={handleChange}/>
                            <input type="text" placeholder="Email" value={Email} name="Email" onChange={handleChange}/>
                            <input type="text" placeholder="Phone number" value={PhoneNum} name="PhoneNum" onChange={handleChange}/>
                            <input type="text" placeholder="Username" value={Username} name="Username" onChange={handleChange}/>
                            <input type="password" placeholder="Password" value={Password} name="Password" onChange={handleChange}/>
                            <p className="sub">By clicking validate you accept <br/><b>Terms of data usage</b></p>
                        </form>
                        <button onClick={Sign} >Validate</button>
                    </div>
                </div>
            }

        </Fragment>
    )
}

export default SignUp
