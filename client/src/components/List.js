import React from 'react'
const List = () => {
    return (
        <div className="List">
            <h1>Daily<button className="lefi">+</button><button className="close">x</button>
                </h1>
            <div className="container itmholder">
                <div className="itm">
                    <h3>Items1</h3>
                </div>
                <div className="itm">
                    <h3>Items2</h3>
                </div>
            </div> 
        </div>       
    )
}

export default List
