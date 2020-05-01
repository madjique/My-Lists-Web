import React, { useState,useEffect } from 'react'
import {getitems} from '../Requests'

const List = (props) => {
    const {Title,listid,token} = props
    const [Items, setItems] = useState([])
    useEffect(() => {
        getitems(token,listid).then(res => setItems(res))
    })
    return (
        <div className="List">
            <div className="titleContainer">
                <h1>{Title}</h1>
                <div className="titleBut">
                    <button className="lefi">+</button>
                    <button className="close">x</button>
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
