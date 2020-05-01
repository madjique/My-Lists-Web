import React, { useState,useEffect } from 'react'
import Axios from 'axios'
const getitems = async (token,listid) => {
    const response =  await Axios({
        method : "GET",
        url : `http://localhost:8080/api/${listid}/items`,
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }

    })
    return response.data
}

const List = (props) => {
    const {Title,listid,token} = props
    const [Items, setItems] = useState([])
    useEffect(() => {
        getitems(token,listid).then(res => setItems(res))
    }, [])
    return (
        <div className="List">
            <h1>{Title}<button className="lefi">+</button><button className="close">x</button>
                </h1>
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
