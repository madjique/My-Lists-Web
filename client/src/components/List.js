import React, { useState,useEffect} from 'react'
import {getitems, deletelist} from '../Requests'
import ItemSh from '../pages/Item'

const List = (props) => {
    const {Title,listid,token} = props
    const [Items, setItems] = useState([])
    const [upt, setupt] = useState(true)
    const [showitm, setshowitm] = useState(false)
    const [infos, setinfos] = useState()
    useEffect(() => {
        setupt(true)
        if (upt) getitems(token,listid).then(res => setItems(res))
        return () => setupt(false)
    },[upt,listid,token])
    
    const additm = () =>{
    }
    const ShowItm = (e) => {
        setinfos(Items.find(it => it.key === e.target.key)) 
        setshowitm(true)
    }
    const deletelst = async () => await deletelist(token,Title)
    return (
        <div className="List">
            <div className="titleContainer">
                <h1>{Title}</h1>
                <div className="titleBut">
                    <button className="lefi" onClick={additm}>+</button>
                    <button className="close"  onClick={deletelst}>x</button>
                </div>
            </div>
            <div className="container itmholder">
                {
                    Items.map(el => 
                        <div key={el._id} className="itm" onClick={ShowItm}>
                            <h3>{el.Title}</h3>
                        </div>)
                }
                {
                    showitm ? <ItemSh infos={infos} setsh={setshowitm}/> : null
                }
            </div> 
        </div>       
    )
}

export default List
