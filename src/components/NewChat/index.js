import React, { useState, useEffect } from 'react'
import './NewChat.css'

import '../../Api'

import SearchIcon from '@mui/icons-material/Search'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Api from '../../Api'

export default ({user, chatlist, show, setShow}) => {

    const [contactList, setContactList] = useState([]) 

    useEffect(()=>{
        const getList = async () => {
            if(user !== null) {
                let results = await Api.getContactList(user.id)
                setContactList(results)
            }
        }   
        getList()
    }, [user])

    const addNewChat = async (userChat) => {
        await Api.addNewChat(user, userChat)
        handleClose()
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className='newChat' style={{left: show ? 0 : -450}}>
            <div className='newChat--head'>
                <div onClick={handleClose} className='newChat--backButton'>
                    <ArrowBack style={{color: '#FFF'}} />
                </div>
                <div className='newChat--headTitle'>Nova Conversa</div>
            </div>
            <div className="search">
                    <div className="search--input">
                        <SearchIcon style={{color: '#919191'}} fontSize="small" />
                        <input type="search" placeholder="Pesquisar contatos" />
                    </div>
                </div>
            <div className='newChat--list'>
                {contactList.map((item, key)=>(
                    <div onClick={()=>addNewChat(item)} className='newChat--item' key={key}>
                        <img className='newChat--itemAvatar' src={item.avatar} alt='' />
                        <div className='newChat--itemName'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div> 
    )
}