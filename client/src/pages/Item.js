import React, {useState} from "react"
const Item = (props) => {
    const {infos , setsh} = props
    const {Title,Description,Deadline,date} = infos
    const [update, setupdate] = useState(false)
    const enUpd = () =>  setupdate(true) 
    const disUpd = () => setupdate(false)
    const back = () => {
        setsh(false)
    }
    return (
        <div className="item">
            {
                update ? 
                <div className="Holder">
                    <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <input>{Title}</input>
                        <input>{Description}</input>
                        <input>{Deadline}</input>
                        <input>{date}</input>
                    </div>
                    <div className="options" >
                        <button className="nostylebtn">Cancel</button>
                        <button onClick={disUpd}>Validate</button>
                    </div>
                </div>
                :
                <div className="Holder">
                    <button onClick={back}>back</button>
                    <div className="itmInfo">
                        <h1>{Title}</h1>
                        <p className="sub" >{Description}</p>
                        <p>{Deadline}</p>
                        <p>{date}</p>
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
