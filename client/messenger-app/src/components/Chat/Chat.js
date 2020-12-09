import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
import axios from "../../axios"

function Chat({ messages }) {

    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "demo",
            timestamp: "now",
            received: false,
        });

        setInput("");
    }
    
    


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar
                src="data:image/jpeg;base64,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"
                />

                <div className="chat__headerInfo">
                    <h3>room name</h3>
                    <p>last seen at ...</p>
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

                
                <p className={`chat__message ${message.received && 'chat__reciever'}`}>
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
