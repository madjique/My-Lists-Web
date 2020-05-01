import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavB'
import List from '../components/List'
import Settings from './Settings'
import axios from 'axios'

const getlists = async(token) =>  {
    let response = {}
    await axios({
        method : "GET",
        url : "http://localhost:8080/api/Lists/",
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }
    }).then(res => response = res.data) 
    return response
}


const Dashboard = (props) => {
    const {token} = props
    const [Lists, setLists] = useState([])
    const [toggle, settoggle] = useState(false)
    useEffect(()=>{
        getlists(token).then(res => setLists(res))
    } ,[])
    return (
        <div className="Dashboard">
            {toggle ? <Settings settg={settoggle}></Settings> : <div/> }
            <NavBar tgsetting={settoggle}/>
            <div className = "ListHolder">
                { Lists ? Lists.map( el => !el.Deleted ? <List key={el._id} Title={el.Title} listid={el._id} token={token} />  : null) : null}
            </div>
        </div>
    )
}

export default Dashboard
