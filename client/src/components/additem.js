import React, { useState } from 'react'
import {additem as adtm} from '../Requests'

const Additem = (props) => {
    
    const {setsh , token , ListID} = props
    const [Titl, setTitl] = useState()
    const [Desc, setDesc] = useState()
    const [DLine, setDLine] = useState()
    const handleChange = (event) => {
        switch(event.target.name) {
            case "title": 
                setTitl(event.target.value); break 
            case "description" :
                setDesc(event.target.value); break 
            case "deadline":
                setDLine(event.target.value); break
            default :
                return
        }
    }
    const back = () => {
        setsh(false)
    }
    const Save = () => {
        adtm(token,ListID,{
            "Title" : Titl,
            "Description" : Desc,
            "Deadline" : DLine
        })
        window.location.reload(false)
    }
    return (
        <div className="item" >
            <div className="Holder">
                    <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <input value={Titl} name="title" onChange={handleChange} placeholder="Title"></input>
                        <input value={Desc} name="description" onChange={handleChange} placeholder="Description" ></input>
                        <input value={DLine} name="deadline" onChange={handleChange} placeholder="Deadline"></input>
                    </div>
                    <div className="options" >
                        <button className="nostylebtn" onClick={back}>Cancel</button>
                        <button onClick={Save}>Save</button>
                    </div>
            </div>
        </div>
    )
}

export default Additem
