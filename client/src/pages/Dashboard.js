import React from 'react'
import NavBar from '../components/NavB'
import List from '../components/List'
import Settings from './Settings'
import Item from './Item'
const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Settings></Settings>
            <NavBar/>
            <div className = "ListHolder">
                <List/>
                <List/>
            </div>
            <Item></Item>
        </div>
    )
}

export default Dashboard
