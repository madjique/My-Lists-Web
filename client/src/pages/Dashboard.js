import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavB'
import List from '../components/List'
import Settings from './Settings'
import axios from 'axios'

const getlists = async(token) =>  {
    return await axios({
        method : "GET",
        url : "http://localhost:8080/api/Lists/",
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }
    })  
}


const Dashboard = (props) => {
    const {token} = props
    const [Lists, setLists] = useState([])
    useEffect(()=>{
        function Fillup(){
            return getlists(token).data
        }
         setLists(Fillup())
    } ,[])
    return (
        <div className="Dashboard">
            <Settings></Settings>
            <NavBar/>
            <div className = "ListHolder">
                { Lists ? Lists.map( el => <List Title={el.Title} listid={el._id}/>) : null }
            </div>
        </div>
    )
}

export default Dashboard
