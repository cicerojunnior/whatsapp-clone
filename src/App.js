import React from "react"
import './App.css'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

export default () => {
    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="foto de perfil" />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <ChatIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search--input">
                        <SearchIcon style={{color: '#919191'}} fontSize="small" />
                        <input type="search" placeholder="Pesquisar ou começar uma conversa" />
                    </div>
                </div>

                <div className="chatlist">
                    ...
                </div>
            </div>
            <div className="contentarea">
                ...
            </div>
        </div>
    )
}