import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavB'
import List from '../components/List'
import Settings from './Settings'
import {getlists} from '../Requests'
//import AddList from '../components/addlist'

const Dashboard = (props) => {
    const {token} = props
    const [Lists, setLists] = useState([])
    const [toggle, settoggle] = useState(false)
    useEffect(()=>{
        getlists(token).then(res => setLists(res))
    } )
    return (
        <div className="Dashboard">
            <Settings toggle={toggle} settoggle={settoggle}></Settings>
            <NavBar token={token} />
            <div className = "ListHolder">
                { Lists ? Lists.map( el => !el.Deleted ? <List key={el._id} Title={el.Title} listid={el._id} token={token} />  : null) : null}
            </div>
        </div>
    )
}

export default Dashboard
