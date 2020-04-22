import React from 'react'
import drawer from '../assets/icons/drawer.svg'
const NavB = () => {
    return (
        <div className="Nav">
            <button className="nostylebtn"><img src={drawer} alt=""/></button>
            <h1>My Lists</h1>
            <button className="addlist">+ Add a list</button>
        </div>
    )
}

export default NavB
