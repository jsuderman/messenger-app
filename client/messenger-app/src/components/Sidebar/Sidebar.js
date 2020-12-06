import React from 'react';
import "./Sidebar.css";
import MessageIcon from '@material-ui/icons/Message';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import { Avatar, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar 
                src="https://avatars3.githubusercontent.com/u/62914584?s=460&u=ce638ec782c6e7862b275e38531b112e4cb9c76e&v=4"
                /> 
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutSmallIcon />
                    </IconButton>

                    <IconButton>
                        <MessageIcon />
                    </IconButton>

                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="search or start new chat" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
