import React from 'react';
import "./SidebarChat.css";
import axios from "../../axios";
import { Avatar } from '@material-ui/core';


function SidebarChat({ id, name, addNewChat }) {

        const createChat = () => {
            const roomName = prompt("please enter name of chat");

            if (roomName) {
                axios.post("/rooms/new", {
                    name: roomName
                })
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
                <h2>{name}</h2>
                <p>last message...</p>
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
