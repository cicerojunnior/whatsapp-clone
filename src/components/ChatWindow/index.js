import React from "react"
import EmojiPicker from "emoji-picker-react"
import './ChatWindow.css'

import Search from "@mui/icons-material/Search"
import MoreVert from "@mui/icons-material/MoreVert"
import AttachFile from "@mui/icons-material/AttachFile" 
import InsertEmoticon from '@mui/icons-material/EmojiEmotions'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import MicIcon from '@mui/icons-material/Mic'
import GifIcon from '@mui/icons-material/GifBox'
import StickyIcon from '@mui/icons-material/StickyNote2'

export default () => {

    const handleEmojiClick =  () => {
        
    }

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
                
            </div>

            <div className="chatWindow--emojiArea">
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn">
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <GifIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <StickyIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <InsertEmoticon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFile style={{color: '#919191'}} />
                    </div>
                </div>
                <div className="chatWindow--inputArea">
                    <input 
                        ype="text" 
                        className="chatWindow--input"
                        placeholder="Mensagem"
                    />
                </div>
                <div className="chatWindow--pos">
                    <div className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}