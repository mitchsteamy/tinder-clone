//@ts-check

import React from 'react';
import "./Chat.css";
import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material';

function Chat({ name, message, profilePic, timeStamp }) {
  return (
    <Link to={`chat/${name}`}>
      <div className='chat'>
        <Avatar className='chat__image' alt={name} srcSet={profilePic} />
        <div className='chat__details' >
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <p className='chat__timestamp' >{timeStamp}</p>
      </div>
    </Link>
  )
}

export default Chat