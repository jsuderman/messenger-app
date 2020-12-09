import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";


function SidebarChat({ addNewChat }) {

        const createChat = () => {
            const roomName = prompt("please enter name of chat");

            if (roomName) {
                // do something in here in db
            }
        };



    return !addNewChat ? (
        <div className="sidebarChat">

            <Avatar
                variant="square"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxLIipZcvPn5Japs5GrhTX_sNO26wrc2k0A&usqp=CAU"
                alt="random guy avatar"
            />
            <div className='sidebarChat__header'>
                <h2>John Q</h2>
                <p>whats up man?</p>
            </div>
        </div>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );

}

export default SidebarChat
