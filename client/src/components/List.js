import React, { useState,useEffect } from 'react'
import {getitems, deletelist} from '../Requests'

const List = (props) => {
    const {Title,listid,token} = props
    const [Items, setItems] = useState([])
    const [upt, setupt] = useState(true)
    useEffect(() => {
         if (upt) getitems(token,listid).then(res => setItems(res))
        return () => setupt(false)
    })
    
    const additm = () =>{
        
    }
    const deletelst = async () => await deletelist(token,Title)
    return (
        <div className="List">
            <div className="titleContainer">
                <h1>{Title}</h1>
                <div className="titleBut">
                    <button className="lefi" onClick={additm}>+</button>
                    <button className="close"  onClick={deletelst}>x</button>
                </div>
            </div>
            <div className="container itmholder">
                {
                    Items.map(el => 
                        <div key={el._id} className="itm">
                            <h3>{el.Title}</h3>
                        </div>)
                }
            </div> 
        </div>       
    )
}

export default List
