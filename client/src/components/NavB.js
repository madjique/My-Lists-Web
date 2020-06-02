import React, { useState } from 'react'
import drawer from '../assets/icons/drawer.svg'
import Addlst from './addlist'
const NavB = (props) => {
    const {token} = props
    const addComp = ()=>{
        //localStorage.removeItem('myliststoken')
        //window.location.reload(false)
        let DCT = document.getElementById("DCT")
        DCT.classList.toggle('DCopened')
        let DR = document.getElementById("DR")
        DR.classList.toggle('DRopened')
    }
    const [shaddlst, setshaddlst] = useState(false)
    const addlst = () =>{
        setshaddlst(true)
    }
    return (
        <div className="Nav">
            <button className="nostylebtn" onClick={addComp} >
                <img src={drawer} alt=""/>
            </button>
            <h1>My Lists</h1>
            <button className="addlist" onClick={addlst} >+ Add a list</button>
            
            {
                shaddlst ? <Addlst setsh={setshaddlst} token={token} /> : null
            }
            
            <div className="Drawcontainer" id="DCT" onClick={addComp}>
                <div className="Drawer" id="DR">
                </div>
            </div>
        </div>
    )
}

export default NavB
