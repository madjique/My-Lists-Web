import React from 'react'
import NavBar from '../components/NavB'
import List from '../components/List'
import Settings from './Settings'
const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Settings></Settings>
            <NavBar/>
            <div className = "ListHolder">
                <List/>
                <List/>
            </div>
        </div>
    )
}

export default Dashboard
