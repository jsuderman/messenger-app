import React, { useEffect } from 'react';
import "./SidebarChat.css";
import axios from "../../axios";
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";


function SidebarChat({ id, name, addNewChat, room }) {

    const createChat = () => {
        const roomName = prompt("please enter name of chat");

        if (roomName) {
            axios.post("/rooms/new", {
                name: roomName,
                
            })
        }
    };

    useEffect(() => {
        if (id) {
            axios.get("/messages/sync")
            .then(response => {
                console.log(response)
            })
        }
    }, [id])


    return !addNewChat ? (
        <Link to={`/rooms/${id}`} >
            <div className="sidebarChat">

                <Avatar
                    variant="square"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxLIipZcvPn5Japs5GrhTX_sNO26wrc2k0A&usqp=CAU"
                    alt="random guy avatar"
                />
                <div className='sidebarChat__header'>
                    <h2>{name}</h2>
                    <p>last message ....</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat}
                className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
        );

}

export default SidebarChat
