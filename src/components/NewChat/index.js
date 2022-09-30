import React, { useState } from 'react'
import './NewChat.css'

import SearchIcon from '@mui/icons-material/Search'
import ArrowBack from '@mui/icons-material/ArrowBack'

export default () => {

    const [contactList, setContactList] = useState([
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', nome: 'Cicero Jr'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', nome: 'Cicero Jr'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', nome: 'Cicero Jr'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', nome: 'Cicero Jr'}
    ])

    return (
        <div className='newChat'>
            <div className='newChat--head'>
                <div className='newChat--backButton'>
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
                    <div className='newChat--item' key={key}>
                        <img className='newChat--itemAvatar' src={item.avatar} alt='' />
                        <div className='newChat--itemName'>
                            Faaala
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    )
}