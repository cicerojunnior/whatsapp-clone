import React, { useState, useEffect, useRef } from "react"
import './ChatWindow.css'

import Api from '../../Api'

import EmojiPicker from "emoji-picker-react"
import MessageItem from '../MessageItem/'

import Search from "@mui/icons-material/Search"
import MoreVert from "@mui/icons-material/MoreVert"
import AttachFile from "@mui/icons-material/AttachFile" 
import InsertEmoticonIcon from '@mui/icons-material/EmojiEmotions'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import MicIcon from '@mui/icons-material/Mic'
import GifIcon from '@mui/icons-material/GifBox'
import StickyIcon from '@mui/icons-material/StickyNote2'    

export default ({user, data}) => {

    const body = useRef()

    let recognition = null
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (speechRecognition !== undefined) {
        recognition = new speechRecognition()
    }

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers)
        return unsub
    },[data.chatId])

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])
 
    const handleEmojiClick =  (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }
            recognition.start()
        }
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSendClick()
        }
    }

    const handleSendClick = () => {
        if(text !== '' ) {
            Api.sendMessage(data, user.id, 'text', text, users)
            setText('')
            setEmojiOpen(false)
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img className="chatWindow--avatar" src={data.image} alt="" />
                    <div className="chatWindow--name">{data.title}</div>
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
            <div ref={body} className="chatWindow--body">
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiArea" style={{height: emojiOpen ? '320px' : '0px'}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{width: emojiOpen?40:0}}>
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}} />
                    </div>
                    <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{width: emojiOpen?40:0}}>
                        <GifIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{width: emojiOpen?40:0}}>
                        <StickyIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFile style={{color: '#919191'}} />
                    </div>
                </div>
                <div className="chatWindow--inputArea">
                    <input 
                        type="text" 
                        className="chatWindow--input"
                        placeholder="Mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' && 
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }
                </div>
                
            </div>
        </div>
    )
}