import React, { useState,useEffect } from 'react'
import Axios from 'axios'
const getitems = async (listid) => {
    return await Axios({
        method : "GET",
        url : `http://localhost:8080/api/${listid}/items`
    })
}

const List = (props) => {
    const {Title,listid} = props
    const [Items, setItems] = useState([])
    useEffect(() => {
        setItems(getitems(listid))
    }, [])
    return (
        <div className="List">
            <h1>{Title}<button className="lefi">+</button><button className="close">x</button>
                </h1>
            <div className="container itmholder">
                {
                    Items.map(el => 
                        <div className="itm">
                            <h3>{el.Title}</h3>
                        </div>)
                }
            </div> 
        </div>       
    )
}

export default List
