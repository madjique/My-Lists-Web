import React, {useState} from 'react'
import {updateItem} from '../Requests'
const Item = (props) => {
    const {infos , setsh , token} = props
    const {Creation} = infos
    const [update, setupdate] = useState(false)
    const enUpd = () =>  setupdate(true) 
    const disUpd = () => setupdate(false)
    const back = () => {
        setsh(false)
    }
    const [Titl, setTitl] = useState(infos.Title)
    const [Desc, setDesc] = useState(infos.Description)
    const [DLine, setDLine] = useState(infos.Deadline)
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
    const validate = () => {
        updateItem(token,{
            "ListID" : infos.ListID ,
            "_id" : infos._id,
            "Title" : Titl,
            "Description" : Desc,
            "Deadline" : DLine
        })
        disUpd()
        window.location.reload(false)
    }
    return (
        <div className="item">
            {
                update ? 
                <div className="Holder">
                    <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <input value={Titl} name="title" onChange={handleChange} placeholder="Title"></input>
                        <input value={Desc} name="description" onChange={handleChange} placeholder="Description" ></input>
                        <input value={DLine} name="deadline" onChange={handleChange} placeholder="Deadline"></input>
                    </div>
                    <div className="options" >
                        <button className="nostylebtn" onClick={disUpd}>Cancel</button>
                        <button onClick={validate}>Validate</button>
                    </div>
                </div>
                :
                <div className="Holder">
                    <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <h1>{Titl}</h1>
                        <p className="sub" >{Desc}</p>
                        {DLine ? <p>Deadline : {DLine}<br/></p> : <p>No deadline set<br/></p>}
                        
                        <p className="sub">issue : {Creation}</p>
                    </div>
                    <div className="options" >
                        <button className="nostylebtn">Delete</button>
                        <button onClick={enUpd}>Update</button>
                    </div>
                </div> 
            }
            
        </div>
    )
}

export default Item
