import React from 'react'

const Settings = (props) => {
    const {settg}= props
    return (
        <div className="Setting">
            <div className="Drawer">
                <h1>Drawer</h1>
            </div>
            <div className="Blurry setBlurry" onClick={settg(false)}>

            </div> 
        </div>        
    )
}

export default Settings
