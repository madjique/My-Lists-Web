import React from 'react'

const Item = () => {
    return (
        <div className="item">
            <div className="Blurry"></div>
            <div className="Holder">
                <button>back</button>
                <div className="itmInfo">
                    <h1>Item title</h1>
                    <p className="sub" >Description</p>
                    <p>Deadline</p>
                    <p>data</p>
                </div>
                <div className="options" >
                    <button className="nostylebtn">Delete</button>
                    <button>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Item
