import React from "react"
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div className={`chatListItem ${active?'active':''}`} onClick={onClick}>
            <img src={data.image} className="chatListItem--avatar" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">07:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Boraaaaa Biiiiillll
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}