import React from 'react'
import drawer from '../assets/icons/drawer.svg'
const NavB = (props) => {
    const addComp = ()=>{
        localStorage.removeItem('myliststoken')
        window.location.reload(false)
    }
    return (
        <div className="Nav">
            <button className="nostylebtn" onClick={addComp} >
                <img src={drawer} alt=""/>
            </button>
            <h1>My Lists</h1>
            <button className="addlist" >+ Add a list</button>
        </div>
    )
}

export default NavB
