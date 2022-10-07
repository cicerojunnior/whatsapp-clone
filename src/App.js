import React, { useState } from "react"
import './App.css'

import ChatListItem from './components/ChatList'
import ChatIntro from "./components/ChatIntro"
import ChatWindow from "./components/ChatWindow"
import NewChat from "./components/NewChat"
import Login from './components/LoginWindow'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'

export default () => {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title: 'Biiiil', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 2, title: 'Biiiil', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 3, title: 'Biiiil', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 4, title: 'Biiiil', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    ]);
    const [activeChat, setActiveChat] = useState({})
    const [user, setUser] = useState(null)
    const [showNewChat, setShowNewChat] = useState(false)

    const handleNewChat = () => {
        setShowNewChat(true)
    }

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }
        setUser(newUser)
    }

    if(user === null) {
        return (<Login onReceive={handleLoginData} />)
    }

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat 
                    chatlist={chatlist} 
                    user={user} 
                    show={showNewChat} 
                    setShow={setShowNewChat} 
                />
                <header>
                    <img className="header--avatar" src={user.avatar} alt="foto de perfil" />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div onClick={handleNewChat} className="header--btn">
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
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="contentArea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow user={user} />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
            </div>
        </div>
    )
}