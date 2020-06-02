import React , {useState} from 'react'
import {addlist as adlst} from '../Requests'

const Addlist = (props) => {
    const {setsh , token } = props
    const [Titl, setTitl] = useState()
    const handleChange = (e) => {
        setTitl(e.target.value)
    }

    const back = () => {
        setsh(false)
    }
    const Save = () => {
        adlst(token,Titl)
        back()
    }
    
    return (
        <div className="item" >
            <div className="Holder">
                
            <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <input value={Titl} name="title" onChange={handleChange} placeholder="Title"></input>
                    </div>
                    <div className="options" >
                        <button className="nostylebtn" onClick={back}>Cancel</button>
                        <button onClick={Save}>Save</button>
                    </div>
            </div>
        </div>
    )
}

export default Addlist
