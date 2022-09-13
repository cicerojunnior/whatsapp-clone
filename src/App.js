import React, { useState } from "react"
import './App.css'

import ChatListItem from './components/ChatList/index'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

export default () => {

    const [chatlist, setChatList] = useState([{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}]);

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

                <div className="chatList">
                    {chatlist.map((item, key) => (
                        <ChatListItem
                            key={key}
                        />
                    ))}
                </div>
            </div>
            <div className="contentArea">
                ...
            </div>
        </div>
    )
}