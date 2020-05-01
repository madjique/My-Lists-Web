import React,{Fragment} from 'react'

const Settings = (props) => {
    return (
        <Fragment>
        {
            props.toggle ? 
            
            <div className="Setting">
                <div className="Drawer">
                        <h1>Settings</h1>
                </div>
                <div className="Blurry setBlurry" onMouseDown={props.settoggle(false)}/> 
            </div>  :
            null

        }  
        </Fragment>    
    )
}

export default Settings
