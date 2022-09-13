import React from "react"
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img src="https://www.w3schools.com/howto/img_avatar.png" className="chatListItem--avatar" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Júnior Silva</div>
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