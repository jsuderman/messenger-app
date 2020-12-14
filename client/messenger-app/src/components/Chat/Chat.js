import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
import axios from "../../axios";
import { useStateValue } from '../../StateProvider';
import { Channel } from 'pusher-js';


function Chat({ rooms, name, messages }) {

    const [input, setInput] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        // if (roomId)
        {
            axios.get("/rooms/sync")
            .then(response => {
                console.log(response.data);
                setRoomName(response.data);
            });
            return () => {
                channel.unbind_all();
                channel.unsubscribe();
            }
        };
    }, [])


    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: user.displayName,
            timestamp: "now",
            received: false,
        });

        setInput("");
    }
    
    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar
                src={user?.photoURL}
                />

                <div className="chat__headerInfo">
                    {roomName.map(rm => (
                    <h3>{rm.name}</h3>
                    ))}
                
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>

                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => ( 

                
                <p className={`chat__message ${message.name === user.displayName && 'chat__reciever'}`}>
                    <span className="chat__name">{message.name}</span>

                    {message.message}

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                    
                </p>
                ))}
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="type message"
                    type="text"
                    />
                    <button 
                    type="submit"
                    onClick={sendMessage}
                    >
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
