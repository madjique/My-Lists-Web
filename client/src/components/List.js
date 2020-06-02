import React, { useState,useEffect} from 'react'
import {getitems, deletelist} from '../Requests'
import ItemSh from '../pages/Item'
import Addit from './additem'
import Addlst from './addlist'

const List = (props) => {
    const {Title,listid,token} = props
    const [Items, setItems] = useState([])
    const [upt, setupt] = useState(true)
    const [showitm, setshowitm] = useState(false)
    const [shadditm, setshadditm] = useState(false)
    const [shaddlst, setshaddlst] = useState(false)
    const [infos, setinfos] = useState()
    useEffect(() => {
        setupt(true)
        if (upt) getitems(token,listid).then(res => setItems(res))
        return () => setupt(false)
    },[upt,listid,token])
    
    const additm = (e) =>{
        setshadditm(true)
    }
    const ShowItm = (e) => {
        setinfos(Items.find(it => it._id === e.target.id))
        console.log(infos)
        setshowitm(true)
    }
    const addlst = () =>{

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
                        <div key={el._id} id={el._id}  className="itm" onClick={ShowItm}>
                            <h3 id={el._id} >{el.Title}</h3>
                        </div>)
                }
                {
                    showitm ? <ItemSh infos={infos} setsh={setshowitm} token={token} /> : null
                }
                {
                    shadditm ? <Addit ListID={listid} setsh={setshadditm} token={token} /> : null
                }
                {
                    shaddlst ? <Addlst token={token} /> : null
                }
            </div> 
        </div>       
    )
}

export default List
