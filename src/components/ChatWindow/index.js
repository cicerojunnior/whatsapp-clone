import React from "react"

import './ChatWindow.css'

import Search from "@mui/icons-material/Search"
import MoreVert from "@mui/icons-material/MoreVert"
import AttachFile from "@mui/icons-material/AttachFile" 

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="chatWindow--name">Cícero Júnior</div>
                </div>
                <div className="chatWindow--headerButtons">
                    <div className="chatWindow--btn">
                        <Search style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVert style={{color: '#919191'}}/>
                    </div>
                    
                </div>
            </div>
            <div className="chatWindow--body">
                ...
            </div>
            <div className="chatWindow--footer">
                <AttachFile style={{color: '#919191'}} />
            </div>
        </div>
    )
}